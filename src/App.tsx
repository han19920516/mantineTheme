import { MantineProvider, Text } from '@mantine/core';
import mantineTheme from './theme/mantineTheme';
import {ContainedInputs} from './components/ContainedInputs'

export default function App() {
  return (
    <MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
      <ContainedInputs />
    </MantineProvider>
  );
}