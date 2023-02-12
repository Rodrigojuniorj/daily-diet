import { Container, Logo, PersonImage } from "./styles";

import LogoImg from '../../assets/logo.png'
import { SafeAreaView } from "react-native-safe-area-context";

export function Person() {
    return (
        <SafeAreaView>
            <Container>
                <Logo source={LogoImg} />

                <PersonImage source={{
                    uri: 'https://github.com/rodrigojuniorj.png'
                }} />
            </Container>
        </SafeAreaView>
    )
}