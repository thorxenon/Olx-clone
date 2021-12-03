import styled from 'styled-components';

export const PageArea = styled.div`
    display:flex;
    margin-top:20px;

    .left-side{
        width:250px;
        margin-right:10px;

        .filter-name{
            font-size:15px;
            margin:10px 0;
        }

        input,select{
            width:100%;
            height:40px;
            border:2px solid #9bb83c;
            border-radius:5px;
            outline:0;
            color:#000;
            padding:10px;
        }

        ul,li{
            margin:0;
            padding:0;
            list-style-type:none;
        }

        .category-item{
            display:flex;
            align-items:center;
            padding:10px;
            border-radius:5px;
            color:#000;
            cursor:pointer;

            img{
                width:25px;
                height:25px;
                margin-right:5px;
            }
        }

        .category-item:hover,
        .category-item.active{
            transition:0.5s;
            background-color:#9bb83c;
            color:white;
        }
    }

    .right-side{
        flex:1;

        h2{
            margin-top:0;
            font-size:18px;
        }

        .list-warning{
            text-align:center;
            padding:30px 0;
        }

        .list{
            display:flex;
            flex-wrap:wrap;

            .add-item{
                width:33%;
            }
        }

        .pagination{
            display:flex;
            flex-wrap:wrap;
            overflow-x:auto;
            align-items:center;
            justify-content:center;
            margin:10px 0;

            .page-item{
                width:30px;
                height:30px;
                border:1px solid #000;
                display:flex;
                justify-content:center;
                font-size:14px;
                margin-right:5px;
                cursor:pointer;
            }
        }
    }

    @media (max-width:600px){
        &{
            flex-direction:column;
        }

        .left-side{
            width:auto;
            margin:10px;

            ul{
                display:flex;
                flex-wrap:wrap;

                li{
                    width:50%;
                }
            }
        }

        .right-side{
            margin:10px;

            .list .add-item{
                width:50%;
            }
        }
    }
`;