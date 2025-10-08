import { useState } from "react";

export default function FAQ() {
    const faqs = [
        {
            question: "O que é o MerendApp?",
            answer:
                "O MerendApp é uma plataforma que conecta escolas e fornecedores para otimizar o processo de compra e venda da merenda escolar, reduzindo desperdícios e garantindo alimentação de qualidade aos alunos."
        },
        {
            question: "Para quem é o MerendApp?",
            answer:
                "O sistema foi pensado para atender as necessidades gestores escolares, fornecedores de alimentos e órgãos públicos responsáveis pela merenda."
        },
        {
            question: "Como o MerendApp ajuda a reduzir o desperdício?",
            answer:
                "O MerendApp conecta compradores e vendedores de alimentos, fornecendo informações claras sobre ambas as partes interessadas. Dessa forma, facilita negociações mais precisas, evita demoras e excessos nos pedidos e contribui para a redução do desperdício."
        },
        {
            question: "O MerendApp é gratuito?",
            answer:
                "O uso do MerendApp pode variar de acordo com o modelo de contratação da instituição. Algumas funcionalidades básicas são gratuitas, enquanto módulos avançados são oferecidos em planos pagos."
        },
        {
            question: "O sistema atende às normas de alimentação escolar?",
            answer:
                "Sim. O MerendApp foi desenvolvido considerando as diretrizes do Programa Nacional de Alimentação Escolar (PNAE) e pode ser ajustado conforme exigências locais."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="container my-5">
            <h2 className="text-center mb-4">Perguntas Frequentes</h2>
            <div className="d-flex flex-column gap-3">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="p-3 rounded shadow-sm bg-light"
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleFAQ(index)}
                    >
                        <h5 className="mb-2 d-flex justify-content-between align-items-center">
                            {faq.question}
                            <span className="fw-bold">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </h5>
                        {openIndex === index && (
                            <p className="mb-0 text-secondary">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
