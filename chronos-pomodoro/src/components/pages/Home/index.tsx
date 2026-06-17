import { Container } from "../../Container";
import { Count } from "../../CountDown";
import { MainForm } from "../../MainForm";
import { MainTemplate } from "../../templates/MainTemplate";

export function Home() {
    return (
    <MainTemplate>
        <Container>
            <Count/>
        </Container>
        <Container>
            <MainForm/>
        </Container>
    </MainTemplate>
    )
}