import styled from 'styled-components';

export const Item = styled.div`
    a{
        display:block;
        border:2px solid #fff;
        margin:10px;
        text-decoration:none;
        padding:10px;
        border-radius:5px;
        color:#000;
        background-color:#fff;

        &:hover{
            transition:0.5s;
            background-color:#eee;
            border:1px solid #ccc;
        }

        .item-image{
            img{
                width:100%;
                border-radius:5px;
            }
        }

        .item-name{
            font-weight:bold;
        }
    }

`;