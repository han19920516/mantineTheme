import { MantineProvider, Text } from '@mantine/core';
import overrideMantineTheme from './theme/overrideMantineTheme';
import {ContainedInputs} from './components/ContainedInputs'

export default function App() {
  return (
    <MantineProvider theme={overrideMantineTheme} withGlobalStyles withNormalizeCSS>
      <ContainedInputs />
    </MantineProvider>
  );
}