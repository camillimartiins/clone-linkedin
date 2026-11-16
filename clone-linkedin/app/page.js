
"use client";

const pessoas = [
  {
    nome: "Rafael Oliveira",
    descricao: "Desenvolvedor de Software",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120",
  },
  {
    nome: "Ana Souza",
    descricao: "UX/UI Designer",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120",
  },
  {
    nome: "Lucas Ferreira",
    descricao: "Engenheiro de Software",
    foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120",
  },
  {
    nome: "Beatriz Costa",
    descricao: "Desenvolvedora Front-end",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120",
  },
  {
    nome: "Gabriel Santos",
    descricao: "Analista de Sistemas",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120",
  },
];

const destaques = [
  {
    legenda: "Legenda da primeira publicação...",
    imagem:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
  },
  {
    legenda: "Legenda da segunda publicação...",
    imagem:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
  },
  {
    legenda: "Legenda da terceira publicação...",
    imagem:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
  },
];

const atividades = [
  {
    tipo: "publicou isso",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu...",
  },
  {
    tipo: "compartilhou isso",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu...",
  },
]
export default function Home() {
  return (
    <main className="page">
      {/* CABEÇALHO */}
      <header className="topbar">
        <div className="topbarContent">
          <a href="#inicio" className="logo">
            IN
          </a>

          <div className="searchBox">
            <span>⌕</span>
            <input type="text" placeholder="Pesquisar" />
          </div>

          <nav className="navigation">
            <a href="#inicio" className="navItem active">
              <span className="navIcon">⌂</span>
              <span>Início</span>
            </a>

            <a href="#atividades" className="navItem">
              <span className="navIcon">♧</span>
              <span>Minha rede</span>
            </a>

            <a href="#experiencias" className="navItem">
              <span className="navIcon">▣</span>
              <span>Vagas</span>
            </a>

            <a href="#atividades" className="navItem">
              <span className="navIcon">✉</span>
              <span>Mensagens</span>
            </a>

            <a href="#destaques" className="navItem">
              <span className="navIcon">♧</span>
              <span>Notificações</span>
            </a>

            <a href="#inicio" className="navItem">
              <span className="navIcon">●</span>
              <span>Eu</span>
            </a>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="contentLayout">
        <div className="mainColumn">
          {/* PERFIL */}
          <section className="card profileCard" id="inicio">
            <div className="cover">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400"
                alt="Banner de programação"
                className="coverImage"
              />
            </div>

            <div className="profileContent">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400"
                alt="Foto de perfil"
                className="mainAvatar"
              />

              <div className="profileActions">
                <button className="moreButton" type="button">
                  •••
                </button>
                <button className="primaryButton" type="button">
                  + Seguir
                </button>
                <button className="outlineButton" type="button">
                  Enviar mensagem
                </button>
              </div>

              <div className="profileInfo">
                <h1>Camilli Martins</h1>

                <p className="headline">
                  Estudante de Tecnologia | Desenvolvimento Web | Programação
                  e Inovação
                </p>

                <p className="location">
                  São Paulo, Brasil <span>·</span>{" "}
                  <a href="#contato">Informações de contato</a>
                </p>

                <p className="connections">
                  <a href="#atividades">500+ conexões</a>
                </p>

                <div className="profileTags">
                  <span>Estudante</span>
                  <span>Desenvolvimento Web</span>
                </div>
              </div>
            </div>
          </section>

          {/* DESTAQUES */}
          <section className="card sectionCard" id="destaques">
            <h2>Destaques</h2>

            <div className="highlightsGrid">
              {destaques.map((item, index) => (
                <article className="highlightCard" key={index}>
                  <span className="highlightType">Publicação</span>

                  <p className="highlightCaption">{item.legenda}</p>

                  <img
                    src={item.imagem}
                    alt={`Imagem da publicação ${index + 1}`}
                    className="highlightImage"
                  />

                  <div className="highlightStats">
                    <span>👍 124</span>
                    <span>5 comentários</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ATIVIDADES */}
          <section className="card sectionCard" id="atividades">
            <div className="sectionHeading">
              <div>
                <h2>Atividades</h2>
                <p className="followers">??? seguidores</p>
              </div>

              <button className="outlineButton" type="button">
                + Seguir
              </button>
            </div>

            {atividades.map((atividade, index) => (
              <article className="activityItem" key={index}>
                <div className="activityHeader">
                  <img
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120"
                    alt="Foto de perfil"
                    className="smallAvatar"
                  />

                  <div>
                    <p>
                      <strong>Nome Sobrenome</strong> {atividade.tipo}
                    </p>
                    <span>1 sem</span>
                  </div>

                  <button className="moreButton" type="button">
                    •••
                  </button>
                </div>

                <p className="activityText">{atividade.texto}</p>

                <div className="activityStats">
                  <span>👍 124</span>
                  <span>5 comentários</span>
                </div>

                <div className="activityActions">
                  <button type="button">♧ Gostei</button>
                  <button type="button">▢ Comentar</button>
                  <button type="button">↗ Compartilhar</button>
                  <button type="button">➤ Enviar</button>
                </div>
              </article>
            ))}

            <button className="showAllButton" type="button">
              Exibir todas as atividades →
            </button>
          </section>

          {/* SOBRE */}
          <section className="card sectionCard" id="sobre">
            <h2>Sobre</h2>

            <p className="aboutText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </section>

          {/* EXPERIÊNCIAS */}
          <section className="card sectionCard" id="experiencias">
            <h2>Experiências</h2>

            <div className="experienceCompany">
              <div className="companyIcon">E</div>

              <div>
                <h3>Empresa</h3>
                <p>1a 7m</p>
              </div>
            </div>

            <div className="timeline">
              <article className="experienceItem">
                <span className="timelineDot"></span>

                <div>
                  <h3>Fullstack Developer</h3>
                  <p className="jobType">Tempo integral</p>
                  <p className="jobDate">
                    jan de 2022 - o momento · 5 meses
                  </p>
                  <p className="jobLocation">Cidade, estado e país</p>
                </div>
              </article>

              <article className="experienceItem">
                <span className="timelineDot"></span>

                <div>
                  <h3>Fullstack Developer (JR)</h3>
                  <p className="jobType">Tempo integral</p>
                  <p className="jobDate">
                    jun de 2021 - jan de 2022 · 8 meses
                  </p>
                  <p className="jobLocation">Cidade, estado e país</p>
                </div>
              </article>

              <article className="experienceItem">
                <span className="timelineDot"></span>

                <div>
                  <h3>Front-end Developer</h3>
                  <p className="jobType">Tempo integral</p>
                  <p className="jobDate">
                    jan de 2021 - jun de 2021 · 6 meses
                  </p>
                  <p className="jobLocation">Cidade, estado e país</p>
                </div>
              </article>
            </div>
          </section>

          {/* FORMAÇÃO ACADÊMICA */}
          <section className="card sectionCard" id="formacao">
            <h2>Formação acadêmica</h2>

            <div className="educationItem">
              <div className="educationIcon">I</div>

              <div>
                <h3>Instituição de ensino</h3>
                <p>Nome do curso</p>
                <span>2015 a 2019</span>
              </div>
            </div>
          </section>

          {/* IDIOMAS */}
          <section className="card sectionCard" id="idiomas">
            <h2>Idiomas</h2>

            <div className="languageItem">
              <h3>Português</h3>
              <p>Fluente ou nativo</p>
            </div>

            <div className="languageItem lastLanguage">
              <h3>Inglês</h3>
              <p>Intermediário</p>
            </div>
          </section>

          
        </div>

        {/* COLUNA LATERAL */}
        <aside className="sideColumn">
          <section className="card sideCard">
            <h3>As pessoas também viram</h3>

            {pessoas.map((pessoa) => (
              <div className="personItem" key={pessoa.nome}>
                <img
                  src={pessoa.foto}
                  alt={pessoa.nome}
                  className="personPhoto"
                />

                <div className="personInfo">
                  <strong>{pessoa.nome}</strong>
                  <span>{pessoa.descricao}</span>
                  <button className="followButton" type="button">
                    + Seguir
                  </button>
                </div>
              </div>
            ))}
          </section>

          <section className="card sideCard suggestionsCard">
            <h3>Você talvez goste</h3>

            <div className="recommendation">
              <div className="recommendationLogo">IN</div>

              <div>
                <strong>Comunidade de Tecnologia</strong>
                <p>Comunidade profissional</p>
                <button className="followButton" type="button">
                  + Seguir
                </button>
              </div>
            </div>

            <div className="recommendation">
              <div className="recommendationLogo redLogo">DEV</div>

              <div>
                <strong>Desenvolvimento Web</strong>
                <p>Grupo de tecnologia</p>
                <button className="followButton" type="button">
                  + Seguir
                </button>
              </div>
            </div>
          </section>

          {/* RODAPÉ */}
          <footer className="sideFooter">
            <div className="footerLinks">
              <a href="#sobre">Sobre</a>
              <a href="#contato">Acessibilidade</a>
              <a href="#experiencias">Ajuda</a>
              <a href="#formacao">Privacidade e Termos</a>
              <a href="#idiomas">Mais</a>
            </div>

            <p>
              <strong>IN</strong> Plataforma profissional © 2026
            </p>
          </footer>
        </aside>
      </div>
    </main>
  );
}
