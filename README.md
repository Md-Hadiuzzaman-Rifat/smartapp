<div>
    ${logo-create}What have I learn from the project:
    1. firstly I have to install Vite not react.
    2. I cant use bam rules in where I use scss.
    3. bam nested not working like,

    body{
        font:{
            size:24px;
        }
    }     //*****will work****** where as

    .header{
        logo{

        }
    }
    4. I will use module.scss
    5. css module doesn`t support - only support _ . {`${logo-create}`}. It would be {${logo_create}}
    6. I have nothing to worry about importing scss file. I will directly import .scss file in Index.js file
    7. I will not use _file.scss as it create problem importing in index.js file.
    8. React Icon use bootstrap icon and many other icons . so first you have to look at the whole page.
    <li> <p><BiPhone size={"40px"}/></p>  </li>
    9.       svg {
        color: $secondary;
        background-color: white;
        padding: 10px;
        border-radius: 999px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
      }

</div>
