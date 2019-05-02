import { CheckboxProps } from '@material-ui/core/Checkbox';

export interface CaCheckboxProps extends CheckboxProps {
  checkedTheme?: boolean;
  label: string;
}
