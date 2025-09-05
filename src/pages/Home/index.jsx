import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import useApi from '../../helpers/OlxAPI';
import { PageContainer } from './../../components/MainComponents';
import AdItem from './../../components/partials/AdItem';

const Page = () =>{

    const api = useApi();
    
    const [ stateList, setStateList ] = useState([]);
    const [ categories, setCategories ] = useState([]);
    const [ adList, setAdList ] = useState([]);

    useEffect(()=>{
        const getStates = async()=>{
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[]);

    useEffect(()=>{
        const getCategories = async()=>{
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    },[]);

    useEffect(()=>{
        const getRecentAds = async()=>{
            const json = await api.getAds({
                sort:'desc',
                limit:'8'
            });
            setAdList(json.ads);
        }
        getRecentAds();
    },[]);

    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className="search-box">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?"/>
                            <select name="state">
                                {stateList.map((i,k)=>
                                    <option key={k} value={i.name}>{i.name}</option>    
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="category-list">
                        {categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="category-item">
                                <img src={i.img} alt=""/>
                                <span>{i.name}</span>
                            </Link>    
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i,k)=>
                            <AdItem key={k} data={i}/>
                        )}
                    </div>
                    <Link to="/ads" className="see-all-link">Ver todos</Link>
                    <hr/>

                    Amet consequat consectetur ad commodo dolore sunt consectetur duis veniam enim do ea. Id sit adipisicing ut incididunt irure labore ullamco occaecat elit. Excepteur do veniam sunt fugiat et cupidatat cupidatat Lorem. Reprehenderit consectetur dolore aliquip deserunt. Fugiat enim sint non do laboris tempor. Amet magna pariatur exercitation voluptate.
                </PageArea>
            </PageContainer>
        </>   
    )
}

export default Page;