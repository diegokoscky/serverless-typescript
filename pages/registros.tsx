import { GetServerSideProps } from "next";
import axios from "axios";
import { IoListCircleOutline } from "react-icons/io5";

export default function Registros() {
    return (
        <main className="main">
            <div className="box">
                <h2 className="mb-3">
                    <IoListCircleOutline /> Registros
                </h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </main>
    );
}

/*export const getServerSideProps: GetServerSideProps = async () => {
    const response = await axios.get("/api/subscribeListAlt");

    const items: User[] = await response.data;

    return { props: { items } };
};*/
