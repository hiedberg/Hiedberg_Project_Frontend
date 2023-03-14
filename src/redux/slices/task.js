import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit'

// utils
import axios from 'axios'
import { useSelector } from 'react-redux';
//
import { dispatch, store } from '../store';
import { newTask, getTasks, getTask, updateTask, deleteTask } from '../../services/task.service';
import { decodeToken } from '../../utils/jwt';

const initialState = {
    isLoading: false,
    error: null,
    tasks: [],
    task: null,
    sortBy: null,
    filters: {
        category: 'All',
    },
};

const slice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        // START LOADING
        startLoading(state) {
            state.isLoading = true;
        },

        // HAS ERROR
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },

        setTask(state, action) {
            state.isLoading = false;
            state.task = action.payload;
        },

        // GET TASKS
        getTasksSuccess(state, action) {
            state.isLoading = false;
            state.tasks = action.payload;
        },

        // GET TASK
        getTaskSuccess(state, action) {
            state.isLoading = false;
            state.task = action.payload;
        },

        // CREATE TASK
        createTaskSuccess(state, action) {
            state.isLoading = false;
            state.tasks.push({
                id: action.payload.id,
                title: action.payload.title,
                category: action.payload.category,
                description: action.payload.description,
                priority: action.payload.priority,
                clientId: action.payload.clientId,
                createDate: action.payload.submissionDate,
                dueDate: action.payload.endDate,
                status: action.payload.status || 'pending',
                taskTo: { task: action.payload.title },
                taskNumber: action.payload.id.slice(0, 9)
            });
        },

        // EDIT TASK
        editTaskSuccess(state, action) {
            state.isLoading = false;
            state.tasks = action.payload;
        },

        // DELETE TASK
        deleteTaskSuccess(state, action) {
            state.isLoading = false;
            state.tasks = action.payload;
        },

        //  SORT TASKS STATUS
        sortByStatus(state, action) {
            state.sortBy = action.payload;
        },

        // FILTER CATEGORY
        filterTasks(state, action) {
            state.filters.category = action.payload.category;
        },
    }
})

export default slice.reducer;

export const { sortByStatus, filterTasks, setTask } = slice.actions;

export function newTaskFunc(taskBody) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const clientId = decodeToken(localStorage.getItem('accessToken'))
            const body = {
                title: taskBody.title,
                category: taskBody.category.toLowerCase(),
                description: taskBody.description,
                priority: taskBody.priority.toLowerCase(),
                endDate: taskBody.dueDate,
                submissionDate: Date.now(),
                clientId
            }
            const res = await newTask(body);
            dispatch(slice.actions.createTaskSuccess(res));
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}

export function editTaskFunc(id, taskBody) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const { data } = await updateTask(id, taskBody)
            const { task } = store.getState()
            const { tasks } = { ...task }
            const tasksUpdated = tasks.filter(task => task.id !== data.id)
            tasksUpdated.push({
                id: data.id,
                title: data.title,
                category: data.category,
                description: data.description,
                priority: data.priority,
                clientId: data.clientId,
                createDate: data.submissionDate,
                dueDate: data.endDate,
                status: data.status || 'pending',
                taskTo: { task: data.title },
                taskNumber: data.id.slice(0, 9),
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function deleteTaskFunc(taskId) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const { task } = store.getState();
            const { tasks } = { ...task };
            const tasksUpdated = tasks.filter(task => task.id !== taskId);
            dispatch(slice.actions.deleteTaskSuccess(tasksUpdated));
            await deleteTask(taskId)
            return tasksUpdated;
        } catch (error) {
            console.log(error);
        }
    }
}

export function deleteTasksFunc(tasksId) {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const { task } = store.getState();
            const { tasks } = { ...task };
            let tasksUpdated = [...tasks]
            tasksId.forEach(element => {
                tasksUpdated = tasksUpdated.filter(task => task.id !== element);
                deleteTask(element)
            });
            dispatch(slice.actions.deleteTaskSuccess(tasksUpdated));
            return tasksUpdated;
        } catch (error) {
            console.log(error);
        }
    }
}

export function getTasksFunc() {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const res = await getTasks();
            const { results } = res;
            const tasks = [];
            results.map(task => {
                tasks.push({
                    id: task.id,
                    title: task.title,
                    category: task.category,
                    description: task.description,
                    priority: task.priority,
                    clientId: task.clientId,
                    createDate: task.submissionDate,
                    dueDate: task.endDate,
                    status: task.status || 'pending',
                    taskTo: { task: task.title },
                    taskNumber: task.id.slice(0, 9),
                })
                return task;
            })
            dispatch(slice.actions.getTasksSuccess(tasks));
            return res;
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}