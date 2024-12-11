<main>

</main>

<style>
  main {
    background: var(--grey);
    height: 100px;
    margin-top: -1px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 1.563rem 1.563rem;

    @media screen and (min-width: 768px) {
        .container {
            border-radius: 1.875rem 1.875rem 0 0;
            padding: 1rem 3.125rem 2rem;
        }
    }

    @media screen and (min-width: 1024px) {
        .container {
            border-radius: 2.5rem 2.5rem 0 0;
            padding: 1rem 6.25rem 4rem;
        }
    }

    @media screen and (min-width: 1440px) {
        .container {
            padding: 1rem 0 4rem;
        }
    }
  }

  main p {
    
  }
  
  main p a {
    color: var(--purple);
  }


</style>
