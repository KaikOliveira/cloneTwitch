import React from 'react';
import { View , FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';

import { Wrapper, Container, Main } from './styles';


interface Iten {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
const { data, indices } = React.useMemo(() =>{
    const itens: Iten[] =[
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading> ,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title> Followed Categories</Title>,
        isTitle: true,
      },
      { key: 'C1', render:() => <CategoryList /> },
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title> Live Channels </Title> ,
        isTitle: true,
      },
      { key: 'C2', render:() => <StreamList/> },
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title> Continue Watching </Title> ,
        isTitle: true,
      },
      { key: 'C3', render:() => <View /> },
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title> OFFLINE_CHANNELS </Title> ,
        isTitle: true,
      },
      { key: 'C4', render:() => <View /> },
    ];

    // Array que contém indeces de elementos com TITULOS
  const indices: number[] = [];

  itens.forEach((item, index)=> item.isTitle && indices.push(index));
    return {
      data: itens,
      indices,
    };

  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Iten>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            // Efeito de Atualizar REFRESH
            onRefresh={()=> {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
