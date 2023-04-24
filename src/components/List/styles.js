import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ContainerItem = styled.View`
    height: 110px;
    width: ${(props) => (props.trending ? 110 : 90)}px;
    margin: 5px;
`;

export const Image = styled.Image.attrs({
    resizeMode: 'stretch',
}) `
    height: 100%;
    width: 100%;
    border-radius: ${(props) => (props.trending ? 55 : 8)}px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`
