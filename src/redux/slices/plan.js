import { useEffect } from 'react';
import { createSlice } from '@reduxjs/toolkit'

// utils
import axios from 'axios'
import { useSelector } from 'react-redux';
//
import { dispatch, store } from '../store';
import { createPlan, getPlans, getPlan, updatePlan, deletePlan } from '../../services/plan.service';
import { decodeToken } from '../../utils/jwt';

const initialState = {
    isLoading: false,
    error: null,
    plans: [],
    plan: null,
};

const slice = createSlice({
    name: 'plan',
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

        setPlan(state, action) {
            state.isLoading = false;
            state.plan = action.payload;
        },

        // GET PLANS
        getPlansSuccess(state, action) {
            state.isLoading = false;
            state.plans = action.payload;
        },

        // GET PLAN
        getPlanSuccess(state, action) {
            state.isLoading = false;
            state.plan = action.payload;
        },
    }
})

export default slice.reducer;

export const { setPlan } = slice.actions;

export function getPlansFunc() {
    return async () => {
        dispatch(slice.actions.startLoading());
        try {
            const { data } = await getPlans();
            const { results } = data
            const plans = [];
            results.map(plan => {
                plans.push({
                    id: plan.id,
                    subscription: plan.planName,
                    price: plan.price,
                    labelAction: `choose ${plan.planName}`
                })
                return plan;
            })
            dispatch(slice.actions.getPlansSuccess(plans));
            return plans
        } catch (error) {
            dispatch(slice.actions.hasError(error));
        }
    }
}