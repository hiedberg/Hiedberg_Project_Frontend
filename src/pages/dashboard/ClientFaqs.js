import { paramCase } from 'change-case';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import {
  Grid,
  Container,
  Typography,
  Box,
  Tab,
  Tabs,
  Card,
  Stack,
  Table,
  Switch,
  Button,
  Tooltip,
  Divider,
  TableBody,
  IconButton,
  TableContainer,
  TablePagination,
  FormControlLabel,
} from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useTabs from '../../hooks/useTabs';
import useSettings from '../../hooks/useSettings';
import useTable, { getComparator, emptyRows } from '../../hooks/useTable';
// _mock_
import { _tasks } from '../../_mock';
// components
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import Page from '../../components/Page';
import { ClientFaqsHero, FaqsCategory, FaqsList, ClientFaqsForm } from '../../sections/faqs';
import Label from '../../components/Label';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { TableEmptyRows, TableHeadCustom, TableNoData, TableSelectedActions } from '../../components/table';
// sections
import { ClientSupportTableToolbar, ClientSupportTableRow } from '../../sections/@dashboard/clienttask/list';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// const STATUS_OPTIONS = ['all', 'active', 'banned'];
const STATUS_OPTIONS = ['active', 'pending', 'completed', 'draft'];

const CATEGORIES = ['all', 'research', 'health', 'education', 'it', 'development'];
const TABLE_HEAD = [
  { id: 'taskNumber', label: 'Ticket Subject', align: 'left' },
  { id: 'description', label: 'Description', align: 'left' },
  { id: 'category', label: 'Category', align: 'left' },
  { id: 'createDate', label: 'Date Submitted', align: 'left' },
  { id: 'status', label: 'Status', align: 'left' },
  { id: '' },
];
// ----------------------------------------------------------------------

export default function ClientFaqs() {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable();

  const { themeStretch } = useSettings();

  const theme = useTheme();

  const navigate = useNavigate();

  const [tableData, setTableData] = useState(_tasks);

  const [filterName, setFilterName] = useState('');

  const [filterCategory, setFilterCategory] = useState('all');
  const { currentTab: filterStatus, onChangeTab: onFilterStatus } = useTabs('all');
  const handleFilterName = (filterName) => {
    setFilterName(filterName);
    setPage(0);
  };

  const handleFilterCategory = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleDeleteRow = (id) => {
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
  };

  const handleDeleteRows = (selected) => {
    const deleteRows = tableData.filter((row) => !selected.includes(row.id));
    setSelected([]);
    setTableData(deleteRows);
  };

  const handleEditRow = (id) => {
    navigate(PATH_DASHBOARD.clientTask.edit(paramCase(id)));
  };

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
    filterCategory,
    filterStatus,
  });
  const getLengthByStatus = (status) => tableData.filter((item) => item.status === status).length;
  const getPercentByStatus = (status) => (getLengthByStatus(status) / tableData.length) * 100;

  const denseHeight = dense ? 52 : 72;

  const isNotFound =
    (!dataFiltered.length && !!filterName) ||
    (!dataFiltered.length && !!filterCategory) ||
    (!dataFiltered.length && !!filterStatus);
  const TABS = [
    { value: 'all', label: 'All', color: 'info', count: tableData.length },
    { value: 'active', label: 'Pending', color: 'warning', count: getLengthByStatus('active') },
    // { value: 'pending', label: 'Updated', color: 'warning', count: getLengthByStatus('pending') },
    { value: 'completed', label: 'Resolved', color: 'success', count: getLengthByStatus('completed') },
    // { value: 'cancelled', label: 'Cancelled', color: 'error', count: getLengthByStatus('cancelled') },
    { value: 'draft', label: 'Draft', color: 'warning', count: getLengthByStatus('draft') },
  ];

  return (
    <Page title="Faqs">
      <HeaderBreadcrumbs
        heading="Task List"
        links={[
          { name: 'Dashboard', href: PATH_DASHBOARD.general.clientApp },
          { name: 'Support', href: PATH_DASHBOARD.clientTask.root },
          { name: 'Tickets' },
        ]}
        // action={
        //   <Button
        //     variant="contained"
        //     component={RouterLink}
        //     to={PATH_DASHBOARD.clientTask.new}
        //     startIcon={<Iconify icon={'eva:plus-fill'} />}
        //   >
        //     New Task
        //   </Button>
        // }
      />
      <RootStyle>
        <ClientFaqsHero />

        <Container sx={{ mt: -5, mb: 2, position: 'relative' }}>
          <FaqsCategory />

          <Typography variant="h3" sx={{ mb: 5 }}>
            Frequently asked questions
          </Typography>

          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <FaqsList />
            </Grid>
            <Grid item xs={12} md={6}>
              <ClientFaqsForm />
            </Grid>
          </Grid>
          <Card>
            <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={filterStatus}
              onChange={onFilterStatus}
              sx={{ mt: 10, px: 2, bgcolor: 'background.neutral' }}
            >
              {TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  label={
                    <Stack spacing={1} direction="row" alignItems="center">
                      <div>{tab.label}</div> <Label color={tab.color}> {tab.count} </Label>
                    </Stack>
                  }
                />
              ))}
            </Tabs>
            {/* <Tabs
            allowScrollButtonsMobile
            variant="scrollable"
            scrollButtons="auto"
            value={filterStatus}
            onChange={onChangeFilterStatus}
            sx={{ px: 2, bgcolor: 'background.neutral' }}
          >
            {TABS.map((tab) => (
              <Tab disableRipple key={tab} label={tab} value={tab} />
            ))}
          </Tabs> */}

            <Divider />

            <ClientSupportTableToolbar
              filterName={filterName}
              filterCategory={filterCategory}
              onFilterName={handleFilterName}
              onFilterCategory={handleFilterCategory}
              optionsCategory={CATEGORIES}
            />

            <Scrollbar>
              <TableContainer sx={{ minWidth: 800, position: 'relative' }}>
                {selected.length > 0 && (
                  <TableSelectedActions
                    dense={dense}
                    numSelected={selected.length}
                    rowCount={tableData.length}
                    onSelectAllRows={(checked) =>
                      onSelectAllRows(
                        checked,
                        tableData.map((row) => row.id)
                      )
                    }
                    actions={
                      <Tooltip title="Delete">
                        <IconButton color="primary" onClick={() => handleDeleteRows(selected)}>
                          <Iconify icon={'eva:trash-2-outline'} />
                        </IconButton>
                      </Tooltip>
                    }
                  />
                )}

                <Table size={dense ? 'small' : 'medium'}>
                  <TableHeadCustom
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={tableData.length}
                    numSelected={selected.length}
                    onSort={onSort}
                    onSelectAllRows={(checked) =>
                      onSelectAllRows(
                        checked,
                        tableData.map((row) => row.id)
                      )
                    }
                  />

                  <TableBody>
                    {dataFiltered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                      <ClientSupportTableRow
                        key={row.id}
                        row={row}
                        selected={selected.includes(row.id)}
                        onSelectRow={() => onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row.id)}
                        onEditRow={() => handleEditRow(row.taskNumber)}
                      />
                    ))}

                    <TableEmptyRows height={denseHeight} emptyRows={emptyRows(page, rowsPerPage, tableData.length)} />

                    <TableNoData isNotFound={isNotFound} />
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>

            <Box sx={{ position: 'relative' }}>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={dataFiltered.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={onChangePage}
                onRowsPerPageChange={onChangeRowsPerPage}
              />

              <FormControlLabel
                control={<Switch checked={dense} onChange={onChangeDense} />}
                label="Dense"
                sx={{ px: 3, py: 1.5, top: 0, position: { md: 'absolute' } }}
              />
            </Box>
          </Card>
        </Container>
      </RootStyle>
    </Page>
  );
}

function applySortFilter({ tableData, comparator, filterName, filterStatus, filterCategory }) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    tableData = tableData.filter(
      (item) =>
        item.taskNumber.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
        item.taskTo.task.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  if (filterStatus !== 'all') {
    tableData = tableData.filter((item) => item.status === filterStatus);
  }
  if (filterCategory !== 'all') {
    tableData = tableData.filter((item) => item.category === filterCategory);
  }

  return tableData;
}
