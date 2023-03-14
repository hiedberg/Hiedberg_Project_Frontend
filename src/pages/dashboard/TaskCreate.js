// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import TaskNewEditForm from '../../sections/@dashboard/task/new-edit-form';

// ----------------------------------------------------------------------

export default function TaskCreate() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Tasks: Create a new task">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Create a new task"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'Tasks', href: PATH_DASHBOARD.task.list },
            { name: 'New task' },
          ]}
        />

        <TaskNewEditForm />
      </Container>
    </Page>
  );
}
