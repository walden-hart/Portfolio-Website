import { createVuetify, type ThemeDefinition } from 'vuetify';
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#d1eafcff',
    surface: '#BBDEFB',
    primary: '#0D47A1',
    secondary: '#1976D2',
    accent: '#42A5F5',
    error: '#D32F2F',
    info: '#2196F3',
    success: '#388E3C',
    warning: '#FBC02D',
  },
};

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#0D1B2A',
    surface: '#1A2A3D',
    primary: '#4F83CC',
    secondary: '#1E88E5',
    accent: '#42A5F5',
    error: '#EF5350',
    info: '#64B5F6',
    success: '#81C784',
    warning: '#FFD740',
  },
};

export default createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'system',
        themes: {
            light,
            dark,
        }
    }
});
