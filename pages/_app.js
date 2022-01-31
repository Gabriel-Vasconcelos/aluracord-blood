// CSS Global
function GlobalStyle() {
    return (
      <style global jsx>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
          }
          body {
            font-family: 'Open Sans', sans-serif;
          }
          /* App fit Height */ 
          html, body, #__next {
            min-height: 100vh;
            display: flex;
            flex: 1;
          }
          #__next {
            flex: 1;
          }
          #__next > * {
            flex: 1;
          }
          /* ./App fit Height */ 
        `}</style>
    );
  }
  
  //  {console.log(fetch('https://api.github.com/users/gabriel-vasconcelos'))}


// tudo aqui será rodado em todas as páginas
export default function MyApp({ Component, pageProps }){
    return ( 
        <>
            <Component {...pageProps} />

            <GlobalStyle />

        </>
    )
}