import React, {useEffect, useState } from 'react'
import { Container,
         ContainerCarousel,
         ContainerItem,
         ContainerList,
         Image,
         Text} from './styles';

import List from "../../components/List";

import Carrousel from './Carrousel';

import api from '../../services/api';

const apiKey = 'api_key=f420cad6de54370e5d1f6d340bb42439';

const language = 'language=pt-BR'

const Home = () => {
  const [listTrending, setListTrending] = useState([]);
  const lista = [0, 1, 2, 3, 6];

const init = async () => {
  const response = await api.get(`trending/movie/week?${apiKey}&${language}&page=${1}`);

  setListTrending(response.data.results);
};

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
        <ContainerCarousel>
            <Carrousel list={listTrending}/>
        </ContainerCarousel>
        <ContainerList>
          <List list={listTrending} title={"Filmes em Cartaz"} trending={true}/>
        </ContainerList>

        <ContainerList>
          <List list={listTrending} title={"Filmes em Cartaz"}/>
        </ContainerList>

        <ContainerList>
          <List list={listTrending} title={"Filmes em Cartaz"}/>
        </ContainerList>

        <ContainerList>
          <List list={listTrending} title={"Filmes em Cartaz"}/>
        </ContainerList>
    </Container>
  );
};

export default Home