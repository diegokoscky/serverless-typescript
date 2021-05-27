import { GetServerSideProps } from "next";
import { IoListCircleOutline } from "react-icons/io5";
import axios from "axios";
import { User } from "../interfaces/newsletter";

type Props = {
    items: User[];
};

export default function Registros({ items }: Props) {
    return (
        <main className="main">
            <div className="box">
                <h2 className="mb-3">
                    <IoListCircleOutline /> Registros
                </h2>
                <ul>
                    {items.map((item) => (
                        <li key={item._id}>
                            {item.email} | {item.subscribedAt}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const response = await axios.get(
        "https://serverless-typescript.vercel.app/api/subscribeList"
    );
    const items: User[] = await response.data;

    return {
        props: {
            items,
        },
    };
};
