import { useParams } from 'react-router-dom';
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
import TaskNewEditForm from '../../sections/@dashboard/task/new-edit-form';

// ----------------------------------------------------------------------

export default function TaskEdit() {
  const { themeStretch } = useSettings();

  const { id } = useParams();

  const currentTask = _tasks.find((task) => task.id === id);

  return (
    <Page title="Tasks: Edit">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Edit task"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Tasks', href: PATH_DASHBOARD.task.list },
            { name: currentTask?.taskNumber || '' },
          ]}
        />

        <TaskNewEditForm isEdit currentTask={currentTask} />
      </Container>
    </Page>
  );
}
