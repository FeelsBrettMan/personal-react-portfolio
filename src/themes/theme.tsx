import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {
    createTheme,
    makeStyles,
    createStyles,
    Theme as AugmentedTheme,
    ThemeProvider,
} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

const useStyles = makeStyles((theme: AugmentedTheme) =>
    createStyles({
        root: {
            color: theme.status.danger,
            '&$checked': {
                color: theme.status.danger,
            },
        },
        checked: {},
    }),
);

function CustomCheckbox() {
    const classes = useStyles();

    return (
        <Checkbox
            defaultChecked
            classes={{
                root: classes.root,
                checked: classes.checked,
            }}
        />
    );
}

export const theme = createTheme({
    status: {
        danger: orange[500],
    },
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#434750',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            // dark: will be calculated from palette.secondary.main,
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
});

export default function CustomStyles() {
    return (
        <ThemeProvider theme={theme}>
            <CustomCheckbox />
        </ThemeProvider>
    );
}
