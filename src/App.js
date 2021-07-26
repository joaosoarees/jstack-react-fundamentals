import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'dark',
    };
  };

  render () {
    const { theme } = this.state;

    console.log({theme})

    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout 
          onToggleTheme={() => {
            this.setState(prevState => 
              ({ theme: prevState.theme === 'dark' ? 'light' : 'dark'})
            );
          }}
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  };
};

// function App() {
//   const localStorageTheme = JSON.parse(localStorage.getItem('@theme'));
//   const [theme, setTheme] = useState(localStorageTheme || 'dark');

//   const currentTheme = useMemo(() => {
//     return themes[theme] || themes.dark;
//   }, [theme]);

//   function handleToggleTheme() {
//     setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
//   };

//   useEffect(() => {
//     localStorage.setItem('@theme', JSON.stringify(theme))
//   }, [theme]);

//   return (
//     <ThemeProvider theme={currentTheme}>
//       <GlobalStyle />
//       <Layout 
//         onToggleTheme={handleToggleTheme}
//         selectedTheme={theme}
//       />
//     </ThemeProvider>
//   );
// };

export default App;