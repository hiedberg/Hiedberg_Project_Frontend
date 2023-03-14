import { paramCase, capitalCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// _mock_
import { _tasks } from '../../_mock';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import TaskNewEditForm from '../../sections/@dashboard/clienttask/TaskNewEditForm';

// ----------------------------------------------------------------------

export default function ClientTaskCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();
  const { id } = useParams();

  // const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');
  const currentTask = _tasks.find((task) => task.taskNumber === id);
  // const currentTask = _tasks.find((task) => paramCase(task.name) === name);

  return (
    <Page title="Task: Create a new task">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new task' : 'Edit task'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.general.clientApp },
            { name: 'Task', href: PATH_DASHBOARD.clientTask.list },
            { name: !isEdit ? 'New task' : currentTask?.id || '' },
          ]}
        />

        <TaskNewEditForm isEdit={isEdit} currentTask={currentTask} />
      </Container>
    </Page>
  );
}
