import React from "react";

import {
  SubTitle,
  GroupOut,
  Container,
  Text,
  Input,
  StyledCheckbox,
  ContainerInput,
  Label,
} from "../styles";

export default function AreaAtuacao({ onAtuacaoChange = () => {}, ...props }) {
  return (
    <>
      <SubTitle>QUEREMOS SABER EM  QUE ÁREA você ATUA</SubTitle>
      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Artes Cênicas"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Artes Cênicas
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para os artistas de teatro, 
          tv e cinema, modelos fotográficos ou de passarela, performers, 
          drag queens, mestres de cerimônia, hostess, profissionais da arte 
          da palhaçaria, clowns, artistas de circo, das acrobacias,
          dos malabares, entre outros.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Artes Visuais"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Artes Visuais
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para ilustradores, designers, 
          artistas plásticos, escultores, xilogravurista, serigrafistas, 
          artistas multimídia, vjs, cenógrafos, artistas urbanos que trabalham 
          com intervenções como grafitti, lambe, entre outros.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Comunicação"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Comunicação
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para profissionais envolvidos na 
          comunicação de projetos culturais, como jornalistas, assessores de
          imprensa, redatores, produtores de conteúdo e profissionais de
          relações públicas.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Cinema e Fotografia"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Cinema e Fotografia
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para profissionais envolvidos em produção 
          de vídeo, como direção audiovisual, direção de fotografia, edição de 
          imagem, fotografia, direção de iluminação, sonoplastia, direção de cena e 
          produção de set de filmagem, produção de arte, figurinista, entre outros.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Danca"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Dança
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para profissionais envolvidos com todos os 
          tipos de dança, como vogue, ballet, break dance, jazz, danças regionais, 
          danças contemporâneas, dança afro, vogue, improvisação e contato, entre outros.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Produção e Equipes Técnicas para Projetos Culturais"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Produção e Equipes Técnicas para Projetos Culturais
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para profissionais envolvidos em produções, produção de festas, 
          eventos, shows e festivais, produção técnica, produção audiovisual, direção de palco, 
          produção de arte, agenciamento artístico, operação de técnico de som, de iluminação, contra regra e roadies.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Jogos Eletrônicos, APPs e Sites"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Jogos Eletrônicos, APPs e Sites
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para escritores, youtubers e influencers de redes sociais, 
          profissionais envolvidos com a publicação de livros, canais de conteúdo, editoras, jornalistas e blogueiros.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Literatura, Influencers e Youtubers"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Literatura, Influencers e Youtubers
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para escritores, youtubers e influencers de redes sociais, 
          profissionais envolvidos com a publicação de livros, canais de conteúdo, editoras, jornalistas e blogueiros.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
        <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Moda"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Moda
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para estilistas, criadores de estilo, cool hunters, profissionais de 
          corte, costura e modelagem, figurinista, diretores de arte, hair stylist e maquiadores.
          </Text>
        </Container>
      </GroupOut>

      <GroupOut>
      <ContainerInput>
          <Label>
            <Input 
              name="atuacao"
              value="Musica"
              type="checkbox"
              onChange={onAtuacaoChange}/>
            <StyledCheckbox />
            Música
          </Label>
        </ContainerInput>

        <Container>
          <Text>
          Categoria no guia cultural para cantores, músicos e bandas que trabalham com shows, apresentações musicais, 
          performances, composições, arranjos e letras musicais, tocam em festas e eventos como DJ, 
          é instrumentistas, ou produz trilhas sonoras, entre outros.
          </Text>
        </Container>
      </GroupOut>
    </>
  );
}
