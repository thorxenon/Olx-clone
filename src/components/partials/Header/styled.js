import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color:#fff;
    height:60px;
    border-bottom:1px solid #ccc;

    .container{
        max-width:1000px;
        margin:0 auto;
        display:flex;
    }

    a{
        text-decoration:none;
    }

    .logo{
        flex:1;
        display:flex;
        align-items:center;
        height:60px;

        .logo-1,
        .logo-2,
        .logo-3{
            font-size:27px;
            font-weight:700;
        }

        .logo-1{color:#6e0ad6;}
        .logo-2{color:#8ce563;}
        .logo-3{color:#f28000;}
    }

    nav{
        padding-top:10px;
        padding-bottom:10px;

        ul, li{
            margin:0;
            padding:0;
            list-style-type:none;
        }

        ul{
            display:flex;
            align-items:center;
            height:40px;
        }

        li{
            margin-left:20px;
            margin-right:20px;

            a,button{
                border:0;
                background:none;
                color:#000;
                font-size:14px;
                font-weight:700;
                cursor:pointer;
                


                &:hover{
                    transition:1s;
                    color:#999;
                }

                &.button{
                    background-color:#f78323;
                    border-radius:20px;
                    color:white;
                    padding:10px 30px;

                    &:hover{
                        background-color:#c96a1c;
                    }

                }
            }
        }


    }

    @media (max-width:600px){
        &{
            height:auto;
        }

        .container{
            flex-direction:column;
        }

        .logo{
            justify-content:center;
            margin:20px 0;
        }

        nav ul{
            flex-direction:column;
            height:auto;
            
            li{
                margin:20px;
            }
            
            
            a.button{
                border-radius:0;
            }
        }
    }

`;