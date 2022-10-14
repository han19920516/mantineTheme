import { createStyles, Select, TextInput } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));

//you can pass your custom theme here.
const myTheme = createStyles({
  container:{
    maxWidth:"1336px",
    margin:'auto'
  }
});

export function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const {container}=myTheme().classes;

  return (
    <div className={container}>
      <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} />
      <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      />

    </div>
  );
}

