const projetos = [

    {
        nome: "Projeto de reflorestamento",

        categoria: "Ambiental",

        imagem: "img/reflorestamento.jpeg",

        descricao:
            "Ações de reflorestamento e recuperação de áreas degradadas."
    },

    {
        nome: "Limpeza de bosques e parques públicos",

        categoria: "Meio ambiente",

        imagem: "img/limpeza_parque.jpg",

        descricao:
            "Voluntários participam da limpeza e conservação de áreas públicas."
    },

    {
        nome: "Ajuda em comunidades carentes",

        categoria: "Social",

        imagem: "img/ajuda_comunidades.jpg",

        descricao:
            "Ações destinadas ao apoio de comunidades em situação de vulnerabilidade."
    }

];


const app = document.querySelector("#app");

const btnMenu = document.querySelector("#btnMenu");

const menuPrincipal = document.querySelector("#menuPrincipal");


function gerarProjetos() {

    return projetos.map(projeto => {

        return `
            <article class="projeto">

                <span class="badge">
                    ${projeto.categoria}
                </span>

                <h3>
                    ${projeto.nome}
                </h3>

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.nome}"
                    loading="lazy"
                >

                <p>
                    ${projeto.descricao}
                </p>

            </article>
        `;

    }).join("");

}



const paginas = {

    inicio: `

        <section
            id="inicio"
            class="hero"
            aria-labelledby="tituloInicio"
        >

            <div class="hero-texto">

                <h1 id="tituloInicio">
                    Bem-vindo à ONG Esperança
                </h1>

                <p>
                    A ONG Esperança atua na promoção da
                    inclusão social e no apoio a pessoas
                    e comunidades em situação de
                    vulnerabilidade.
                </p>

                <p>
                    Nosso objetivo é desenvolver ações
                    sociais e ambientais que contribuam
                    para uma sociedade mais justa,
                    sustentável e participativa.
                </p>

                <a
                    class="botao-link"
                    href="#projetos"
                >
                    Conheça nossos projetos
                </a>

            </div>


            <div class="hero-imagem">

                <img
                    src="img/trabalho-voluntario-onde-fazer.jpg"
                    alt="Pessoas realizando trabalho voluntário"
                >

            </div>

        </section>

    `,


    sobre: `

        <section
            id="sobre"
            aria-labelledby="tituloSobre"
        >

            <h1 id="tituloSobre">
                Sobre a ONG
            </h1>

            <p>
                A ONG Esperança é uma organização
                dedicada à promoção da inclusão social,
                ao apoio de comunidades em situação de
                vulnerabilidade e à preservação do meio
                ambiente.
            </p>

            <p>
                Por meio de projetos sociais,
                ambientais e ações voluntárias,
                buscamos incentivar a participação
                da comunidade e proporcionar melhores
                condições de vida.
            </p>

            <div class="alert" role="note">

                <strong>Importante:</strong>

                Toda ação voluntária pode contribuir
                para transformar a realidade de uma
                comunidade.

            </div>

        </section>

    `,


    projetos: `

        <section
            id="projetos"
            aria-labelledby="tituloProjetos"
        >

            <h1 id="tituloProjetos">
                Nossos projetos
            </h1>

            ${gerarProjetos()}

        </section>

    `,


    doacoes: `

        <section
            id="doacoes"
            aria-labelledby="tituloDoacoes"
        >

            <h1 id="tituloDoacoes">
                Como ajudar
            </h1>

            <p>
                Existem diversas formas de contribuir
                com os projetos da ONG Esperança.
            </p>


            <div class="doacoes-grid">

                <article class="doacao-card">

                    <h2>Doação via Pix</h2>

                    <p>
                        Contribua financeiramente para
                        ajudar na manutenção dos projetos.
                    </p>

                </article>


                <article class="doacao-card">

                    <h2>Doação de alimentos</h2>

                    <p>
                        Alimentos podem ser destinados
                        às ações realizadas com
                        comunidades carentes.
                    </p>

                </article>


                <article class="doacao-card">

                    <h2>Seja voluntário</h2>

                    <p>
                        Participe das atividades e ajude
                        diretamente nas ações da ONG.
                    </p>

                </article>

            </div>


            <div class="alert" role="alert">

                <strong>Importante:</strong>

                Toda contribuição ajuda a ONG
                Esperança a continuar seus projetos.

            </div>


            <button
                type="button"
                id="btnDoacao"
            >
                Quero ajudar
            </button>


            <dialog
                id="modalDoacao"
                aria-labelledby="tituloModal"
            >

                <h2 id="tituloModal">
                    Obrigado pelo seu interesse!
                </h2>

                <p>
                    Sua contribuição pode ajudar
                    diretamente os projetos da ONG
                    Esperança.
                </p>

                <button
                    type="button"
                    id="fecharModal"
                >
                    Fechar
                </button>

            </dialog>

        </section>

    `,


    cadastro: `

        <section
            id="cadastro"
            aria-labelledby="tituloCadastro"
        >

            <h1 id="tituloCadastro">
                Cadastro de voluntário
            </h1>

            <p>
                Preencha o formulário para demonstrar
                interesse em participar das ações
                da ONG.
            </p>


            <form
                id="formCadastro"
                novalidate
            >

                <fieldset>

                    <legend>
                        Dados pessoais
                    </legend>


                    <div class="campo">

                        <label for="nome">
                            Nome
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                            autocomplete="given-name"
                            aria-describedby="erroNome"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroNome"
                            aria-live="polite"
                        ></span>

                    </div>


                    <div class="campo">

                        <label for="sobrenome">
                            Sobrenome
                        </label>

                        <input
                            type="text"
                            id="sobrenome"
                            name="sobrenome"
                            required
                            autocomplete="family-name"
                            aria-describedby="erroSobrenome"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroSobrenome"
                            aria-live="polite"
                        ></span>

                    </div>


                    <div class="campo">

                        <label for="email">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            autocomplete="email"
                            aria-describedby="erroEmail"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroEmail"
                            aria-live="polite"
                        ></span>

                    </div>


                    <div class="campo">

                        <label for="telefone">
                            Telefone
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            required
                            pattern="[0-9]{10,11}"
                            inputmode="numeric"
                            autocomplete="tel"
                            aria-describedby="erroTelefone"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroTelefone"
                            aria-live="polite"
                        ></span>

                    </div>


                    <div class="campo">

                        <label for="dataNascimento">
                            Data de nascimento
                        </label>

                        <input
                            type="date"
                            id="dataNascimento"
                            name="dataNascimento"
                            required
                            autocomplete="bday"
                            aria-describedby="erroData"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroData"
                            aria-live="polite"
                        ></span>

                    </div>


                    <div class="campo">

                        <label for="cpf">
                            CPF
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            required
                            pattern="[0-9]{11}"
                            inputmode="numeric"
                            placeholder="Somente números"
                            aria-describedby="erroCpf"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroCpf"
                            aria-live="polite"
                        ></span>

                    </div>

                </fieldset>


                <fieldset>

                    <legend>
                        Endereço
                    </legend>


                    <div class="campo campo-full">

                        <label for="endereco">
                            Endereço
                        </label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                            autocomplete="street-address"
                            aria-describedby="erroEndereco"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroEndereco"
                            aria-live="polite"
                        ></span>

                    </div>


                    <div class="campo">

                        <label for="cidade">
                            Cidade
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                            autocomplete="address-level2"
                            aria-describedby="erroCidade"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroCidade"
                            aria-live="polite"
                        ></span>

                    </div>


                    <div class="campo">

                        <label for="estado">
                            Estado
                        </label>

                        <select
                            id="estado"
                            name="estado"
                            required
                            autocomplete="address-level1"
                            aria-describedby="erroEstado"
                        >

                            <option value="">
                                Selecione
                            </option>

                            <option value="SP">
                                São Paulo
                            </option>

                            <option value="PR">
                                Paraná
                            </option>

                            <option value="RJ">
                                Rio de Janeiro
                            </option>

                            <option value="MG">
                                Minas Gerais
                            </option>

                            <option value="SC">
                                Santa Catarina
                            </option>

                            <option value="RS">
                                Rio Grande do Sul
                            </option>

                            <option value="GO">
                                Goiás
                            </option>

                            <option value="MS">
                                Mato Grosso do Sul
                            </option>

                            <option value="MT">
                                Mato Grosso
                            </option>

                        </select>

                        <span
                            class="mensagem-erro"
                            id="erroEstado"
                            aria-live="polite"
                        ></span>

                    </div>


                    <div class="campo">

                        <label for="cep">
                            CEP
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            required
                            pattern="[0-9]{8}"
                            inputmode="numeric"
                            placeholder="Somente números"
                            aria-describedby="erroCep"
                        >

                        <span
                            class="mensagem-erro"
                            id="erroCep"
                            aria-live="polite"
                        ></span>

                    </div>

                </fieldset>


                <button type="submit">
                    Cadastrar
                </button>


                <div
                    id="mensagemFormulario"
                    aria-live="polite"
                ></div>

            </form>

        </section>

    `,


    contato: `

        <section
            id="contato"
            aria-labelledby="tituloContato"
        >

            <h1 id="tituloContato">
                Entre em contato
            </h1>

            <p>
                Para obter mais informações sobre
                os projetos ou oportunidades de
                voluntariado, entre em contato
                com a ONG Esperança.
            </p>

            <p>
                E-mail:
                contato@ongesperanca.org
            </p>

            <p>
                Telefone:
                (11) 99999-9999
            </p>

        </section>

    `

};


function renderizarPagina() {

    let rota = window.location.hash.substring(1);

    if (!rota) {
        rota = "inicio";
    }


    if (!paginas[rota]) {

        app.innerHTML = `

            <section
                class="pagina-erro"
                aria-labelledby="tituloErro"
            >

                <h1 id="tituloErro">
                    Página não encontrada
                </h1>

                <p>
                    A página solicitada não existe.
                </p>

                <a href="#inicio">
                    Voltar para o início
                </a>

            </section>

        `;

    } else {

        app.innerHTML = paginas[rota];

    }


    fecharMenu();

    ativarComponentes();

    app.focus();
}


window.addEventListener(
    "hashchange",
    renderizarPagina
);


function abrirFecharMenu() {

    const aberto =
        menuPrincipal.classList.toggle("menu-aberto");


    btnMenu.setAttribute(
        "aria-expanded",
        aberto
    );


    btnMenu.setAttribute(
        "aria-label",
        aberto
            ? "Fechar menu de navegação"
            : "Abrir menu de navegação"
    );

}


btnMenu.addEventListener(
    "click",
    abrirFecharMenu
);


function fecharMenu() {

    menuPrincipal.classList.remove(
        "menu-aberto"
    );


    btnMenu.setAttribute(
        "aria-expanded",
        "false"
    );


    btnMenu.setAttribute(
        "aria-label",
        "Abrir menu de navegação"
    );

}


function ativarComponentes() {

    ativarModal();

    ativarFormulario();

    ativarLinksDoMenu();

}


function ativarLinksDoMenu() {

    const links =
        document.querySelectorAll("nav a");


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                fecharMenu();

            }
        );

    });

}


function ativarModal() {

    const btnDoacao =
        document.querySelector("#btnDoacao");


    const modalDoacao =
        document.querySelector("#modalDoacao");


    const fecharModal =
        document.querySelector("#fecharModal");


    if (
        !btnDoacao ||
        !modalDoacao ||
        !fecharModal
    ) {
        return;
    }


    btnDoacao.addEventListener(
        "click",
        () => {

            modalDoacao.showModal();

        }
    );


    fecharModal.addEventListener(
        "click",
        () => {

            modalDoacao.close();

            mostrarToast(
                "Obrigado pelo seu interesse em ajudar!"
            );

        }
    );

}


function mostrarToast(mensagem) {

    const toast =
        document.createElement("div");


    toast.classList.add("toast");


    toast.setAttribute(
        "role",
        "status"
    );


    toast.textContent = mensagem;


    document.body.appendChild(toast);


    setTimeout(() => {

        toast.classList.add("mostrar");

    }, 100);


    setTimeout(() => {

        toast.classList.remove("mostrar");


        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}


function ativarFormulario() {

    const form =
        document.querySelector("#formCadastro");


    if (!form) {
        return;
    }


    const campos =
        form.querySelectorAll(
            "input, select"
        );


    campos.forEach(campo => {

        campo.addEventListener(
            "blur",
            () => {

                validarCampo(campo);

            }
        );


        campo.addEventListener(
            "input",
            () => {

                if (campo.value.trim() !== "") {

                    validarCampo(campo);

                }

            }
        );

    });


    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            let formularioValido = true;


            campos.forEach(campo => {

                const valido =
                    validarCampo(campo);


                if (!valido) {

                    formularioValido = false;

                }

            });


            if (!formularioValido) {

                mostrarMensagemFormulario(
                    "Verifique os campos destacados antes de enviar.",
                    false
                );

                const primeiroInvalido =
                    form.querySelector(":invalid");


                if (primeiroInvalido) {

                    primeiroInvalido.focus();

                }

                return;
            }


            salvarCadastro(form);

        }
    );


    restaurarCadastro(form);

}


function validarCampo(campo) {

    const mensagem =
        document.querySelector(
            `#erro${campo.id.charAt(0).toUpperCase()}${campo.id.slice(1)}`
        );


    if (campo.validity.valid) {

        if (mensagem) {
            mensagem.textContent = "";
        }

        campo.removeAttribute("aria-invalid");

        return true;
    }


    let texto = "";


    if (campo.validity.valueMissing) {

        texto = "Este campo é obrigatório.";

    } else if (campo.validity.typeMismatch) {

        texto = "Digite um e-mail válido.";

    } else if (campo.validity.patternMismatch) {

        texto = "Digite o formato solicitado.";

    } else {

        texto = "Verifique o valor informado.";

    }


    if (mensagem) {

        mensagem.textContent = texto;

    }


    campo.setAttribute(
        "aria-invalid",
        "true"
    );


    return false;
}


function salvarCadastro(form) {

    const dados = {

        nome:
            document.querySelector("#nome").value,

        sobrenome:
            document.querySelector("#sobrenome").value,

        email:
            document.querySelector("#email").value,

        telefone:
            document.querySelector("#telefone").value,

        dataNascimento:
            document.querySelector("#dataNascimento").value,

        cpf:
            document.querySelector("#cpf").value,

        endereco:
            document.querySelector("#endereco").value,

        cidade:
            document.querySelector("#cidade").value,

        estado:
            document.querySelector("#estado").value,

        cep:
            document.querySelector("#cep").value

    };


    localStorage.setItem(
        "cadastroONG",
        JSON.stringify(dados)
    );


    mostrarMensagemFormulario(
        "Cadastro realizado com sucesso!",
        true
    );


    mostrarToast(
        "Dados salvos no navegador."
    );

}


function restaurarCadastro(form) {

    const dadosSalvos =
        localStorage.getItem(
            "cadastroONG"
        );


    if (!dadosSalvos) {
        return;
    }


    try {

        const dados =
            JSON.parse(dadosSalvos);


        Object.keys(dados).forEach(chave => {

            const campo =
                form.querySelector(
                    `#${chave}`
                );


            if (campo) {

                campo.value =
                    dados[chave];

            }

        });

    } catch (erro) {

        console.error(
            "Erro ao recuperar cadastro:",
            erro
        );

        localStorage.removeItem(
            "cadastroONG"
        );

    }

}


function mostrarMensagemFormulario(
    mensagem,
    sucesso
) {

    const elemento =
        document.querySelector(
            "#mensagemFormulario"
        );


    if (!elemento) {
        return;
    }


    elemento.className =
        sucesso
            ? "mensagem-sucesso"
            : "mensagem-erro";


    elemento.textContent =
        mensagem;

}


renderizarPagina();