// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import DatePicker from '@mui/lab/DatePicker';
import { Stack, TextField, MenuItem } from '@mui/material';
// components
import { RHFSelect, RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

const CATEGORIES = ['research', 'education', 'health', 'IT', 'development'];
const PRIORITIES = ['high', 'medium', 'low'];

// ----------------------------------------------------------------------

export default function TaskNewEditStatusDate() {
  const { control } = useFormContext();

  return (
    <Stack spacing={2} direction={{ xs: 'row', sm: 'column' }} sx={{ p: 3 }}>
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ p: 3 }}>
        <RHFTextField size="medium" name="title" label="Title" InputLabelProps={{ shrink: true }} />

        <RHFSelect
          fullWidth
          name="status"
          label="Category"
          InputLabelProps={{ shrink: true }}
          SelectProps={{ native: false, sx: { textTransform: 'capitalize' } }}
        >
          {CATEGORIES.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 0.75,
                typography: 'body2',
                textTransform: 'capitalize',
              }}
            >
              {option}
            </MenuItem>
          ))}
        </RHFSelect>
      </Stack>
      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }} sx={{ p: 1 }}>
        <RHFSelect
          fullWidth
          name="status"
          label="Priority"
          InputLabelProps={{ shrink: true }}
          SelectProps={{ native: false, sx: { textTransform: 'capitalize' } }}
        >
          {PRIORITIES.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                mx: 1,
                my: 0.5,
                borderRadius: 0.75,
                typography: 'body2',
                textTransform: 'capitalize',
              }}
            >
              {option}
            </MenuItem>
          ))}
        </RHFSelect>
        <Controller
          name="dueDate"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <DatePicker
              label="Due date"
              value={field.value}
              onChange={(newValue) => {
                field.onChange(newValue);
              }}
              renderInput={(params) => <TextField {...params} fullWidth error={!!error} helperText={error?.message} />}
            />
          )}
        />
      </Stack>

      {/* <Controller
        name="createDate"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Date create"
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            renderInput={(params) => <TextField {...params} fullWidth error={!!error} helperText={error?.message} />}
          />
        )}
      /> */}

      <RHFTextField size="medium" name="description" label="Description" InputLabelProps={{ shrink: true }} />
    </Stack>
  );
}
