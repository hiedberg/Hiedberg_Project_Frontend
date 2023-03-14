import { useParams } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// _mock_
import { _tasks } from '../../_mock';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import Task from '../../sections/@dashboard/task/details';

// ---------------------------------------------------------------------- 

export default function TaskDetails() {
  const { themeStretch } = useSettings();

  const { id } = useParams();

  const task = _tasks.find((task) => task.id === id);

  return (
    <Page title="Task: View">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Task Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'Tasks',
              href: PATH_DASHBOARD.task.root,
            },
            { name: task?.taskNumber || '' },
          ]}
        />

        <Task task={task} />
      </Container>
    </Page>
  );
}
