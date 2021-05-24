import { IoMdMailOpen } from "react-icons/io";
import { FormEvent, useState } from "react";
import axios from "axios";

export default function Home() {
    const [email, setEmail] = useState("");

    const handleSignup = (event: FormEvent) => {
        event.preventDefault();

        axios.post("/api/subscribe", { email });
    };

    return (
        <main className="main">
            <div className="box">
                <h2 className="mb-3">
                    <IoMdMailOpen /> Newsletter
                </h2>
                <p>Assine a nossa newsletter e receba os melhores conteúdos!</p>

                <form onSubmit={handleSignup}>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Digite seu melhor email"
                        />
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-warning">
                            Inscrever
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
