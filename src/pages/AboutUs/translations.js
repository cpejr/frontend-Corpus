export function TranslateText({ globalLanguage }) {
  let title1;
  let subtitle1;
  let subtitle2;
  let subtitle3;
  let paragraph1;
  let paragraph2;
  let paragraph3;
  let paragraph4;
  let paragraph5;
  let paragraph6;
  let paragraph7;
  let paragraph8;

  if (globalLanguage === "PT") {
    title1 = "Quem Somos";
    paragraph1 =
      "O Centro de Pesquisa Internacional Intercultural Communication in Multimodal Interactions (ICMI) é uma rede interinstitucional e internacional de pesquisadores que objetivam analisar a comunicação intercultural em interação a partir de uma perspectiva micro-analítica e multimodal.";
    paragraph2 =
      "Desde 2010, nosso trabalho tem sido pioneiro na investigação de fenômenos conversacionais, interacionais, translinguísticos, multimodais e linguístico-cognitivos, abordando a complexidade das interações interculturais e translíngues em ambientes digitais.";
    paragraph3 =
      "Atualmente, nossos pesquisadores têm se dedicado ao desenvolvimento de metodologias inovadoras para a transcrição e análise multimodal de interações mediadas por vídeo, em contextos virtuais.";
    subtitle1 = "Objetivos e Metodologia";
    paragraph4 =
      "Objetivamos realizar análises empíricas com base em nosso corpus e aproximar os campos de pesquisas Análise da Conversa Multimodal, Linguística Interacional, Estudos de Gestos, Pragmática Intercultural, bem como Linguística Cognitiva e Cultural. Mais especificamente, estamos trabalhando para elaborar uma metodologia de transcrição que integre métodos dos Estudos de Gestos, Análise da Conversa Multimodal e Linguística Interacional, capturando recursos prosódicos, visual-corporais e verbais.";
    paragraph5 =
      "Utilizamos um sistema de transcrição em dois passos: a transcrição sequencial em EXMARALDA notada com GAT 2, algumas transcrições são seguidas de uma anotação detalhada dos gestos utilizando o método LASG. Além disso, estamos explorando a integração de sistemas de Reconhecimento Automático de Fala (ASR) como o Atrain e Whisper, em colaboração com o Instituto da Língua Alemã (Dr. Thomas Schmidt e Dr. Jan Gorisch).";
    paragraph6 =
      "Desse modo, esperamos fortalecer a comunicação global em ambientes virtuais, contribuindo para a internacionalização das instituições brasileiras e estabelecendo diálogos entre academia, empresas e políticas públicas. Nosso projeto visa também formar uma rede acadêmica de alto nível, promovendo a colaboração entre instituições nacionais e internacionais e proporcionando a jovens pesquisadores a oportunidade de desenvolver suas carreiras internacionais.";
    subtitle2 = "Inovações e Colaborações";
    paragraph7 =
      "O projeto Probral (DAAD/CAPES, 2023-2026), nos permitiu desenvolver o subcorpus IMV, com aproximadamente 20 horas de filmagens de interações em Inglês como Língua Franca (ILF). Este corpus inclui reuniões internacionais, aulas online e encontros particulares, documentando uma variedade de interações sociais. Essa parceria envolve pesquisadores da UFMG, UFLA, Universidade de Gießen e IDS (Institut für Deutsche Sprache), para expandir nossas metodologias e oferecer formação complementar em ferramentas de ASR. O projeto - Elaborar uma metodologia para a transcrição e análise multimodal da fala-em-interação mediada por vídeo (2024 - 2027) - por sua vez, é financiado pelo programa FAPEMIG Universal.";
    subtitle3 = "Dados e Preservação";
    paragraph8 = 
      "Os dados presentes neste projeto, registrados sob o CAAE: 55218521.1.1001.5149, são um recurso em expansão desde 2010, documentando interações em contextos interculturais variados. Esta é uma plataforma que vem sendo construída para a preservação e disponibilização desses dados, com o objetivo de criar um banco robusto que suporte análises multimodais detalhadas.";
  }
  if (globalLanguage === "EN") {
    title1 = "About Us";
    paragraph1 =
      "The International Research Center Intercultural Communication in Multimodal Interactions (ICMI) is an interinstitutional and international network of researchers aiming to analyze intercultural communication in interaction from a micro-analytical and multimodal perspective.";
    paragraph2 =
      "Since 2010, our work has been pioneering in the investigation of conversational, interactional, translanguaging, multimodal, and cognitive-linguistic phenomena, addressing the complexity of intercultural and translanguaging interactions in digital environments.";
    paragraph3 =
      "Currently, our researchers are dedicated to developing innovative methodologies for the transcription and multimodal analysis of video-mediated interactions in virtual contexts.";
    subtitle1 = "Objectives and Methodology";
    paragraph4 =
      "Our goal is to carry out empirical analyses based on our corpus and to bring together the research fields of Multimodal Conversation Analysis, Interactional Linguistics, Gesture Studies, Intercultural Pragmatics, as well as Cognitive and Cultural Linguistics. More specifically, we are working to develop a transcription methodology that integrates methods from Gesture Studies, Multimodal Conversation Analysis, and Interactional Linguistics, capturing prosodic, visual-bodily, and verbal resources.";
    paragraph5 =
      "We use a two-step transcription system: sequential transcription in EXMARALDA annotated with GAT 2, followed in some cases by detailed gesture annotation using the LASG method. Additionally, we are exploring the integration of Automatic Speech Recognition (ASR) systems such as Atrain and Whisper, in collaboration with the Institute for the German Language (Dr. Thomas Schmidt and Dr. Jan Gorisch).";
    paragraph6 =
      "In this way, we aim to strengthen global communication in virtual environments, contribute to the internationalization of Brazilian institutions, and establish dialogues between academia, businesses, and public policy. Our project also seeks to build a high-level academic network, fostering collaboration between national and international institutions and providing young researchers with the opportunity to develop international careers.";
    subtitle2 = "Innovations and Collaborations";
    paragraph7 =
      "The Probral project (DAAD/CAPES, 2023–2026) has enabled us to develop the IMV subcorpus, which contains approximately 20 hours of video recordings of interactions in English as a Lingua Franca (ELF). This corpus includes international meetings, online classes, and private encounters, documenting a variety of social interactions.This partnership involves researchers from UFMG, UFLA, the University of Giessen, and IDS (Institute for the German Language), aiming to expand our methodologies and provide additional training in ASR tools. The project Developing a Methodology for the Transcription and Multimodal Analysis of Video-Mediated Talk-in-Interaction (2024–2027) is funded by the program FAPEMIG Universal.";
    subtitle3 = "Data and Preservation";
    paragraph8 = 
      "The data used in this project, registered under CAAE: 55218521.1.1001.5149, represent an expanding resource since 2010, documenting interactions in diverse intercultural contexts. This platform is being developed to preserve and make these data available, with the aim of creating a robust database to support detailed multimodal analyses.";
  }
  if (globalLanguage === "ES") {
    title1 = "Quiénes Somos";
    paragraph1 =
      "El Centro Internacional de Investigación Intercultural Communication in Multimodal Interactions (ICMI) es una red interinstitucional e internacional de investigadores que tiene como objetivo analizar la comunicación intercultural en la interacción desde una perspectiva microanalítica y multimodal.";
    paragraph2 =
      "Desde 2010, nuestro trabajo ha sido pionero en la investigación de fenómenos conversacionales, interaccionales, translenguaje, multimodales y lingüístico-cognitivos, abordando la complejidad de las interacciones interculturales y translenguas en entornos digitales.";
    paragraph3 =
      "Actualmente, nuestros investigadores se dedican al desarrollo de metodologías innovadoras para la transcripción y el análisis multimodal de interacciones mediadas por vídeo en contextos virtuales.";
    subtitle1 = "Objetivos y Metodología";
    paragraph4 =
      "Nuestro objetivo es realizar análisis empíricos basados en nuestro corpus y acercar los campos de investigación del Análisis de la Conversación Multimodal, la Lingüística Interaccional, los Estudios de Gestos, la Pragmática Intercultural, así como la Lingüística Cognitiva y Cultural. Más específicamente, estamos trabajando en el desarrollo de una metodología de transcripción que integre métodos de los Estudios de Gestos, el Análisis de la Conversación Multimodal y la Lingüística Interaccional, capturando recursos prosódicos, visual-corporales y verbales.";
    paragraph5 =
      "Utilizamos un sistema de transcripción en dos etapas: transcripción secuencial en EXMARALDA anotada con GAT 2, y en algunos casos, seguida de una anotación detallada de los gestos mediante el método LASG. Además, estamos explorando la integración de sistemas de Reconocimiento Automático de Voz (ASR), como Atrain y Whisper, en colaboración con el Instituto de la Lengua Alemana (Dr. Thomas Schmidt y Dr. Jan Gorisch).";
    paragraph6 =
      "De este modo, esperamos fortalecer la comunicación global en entornos virtuales, contribuir a la internacionalización de las instituciones brasileñas y establecer diálogos entre la academia, las empresas y las políticas públicas. Nuestro proyecto también tiene como objetivo formar una red académica de alto nivel, promoviendo la colaboración entre instituciones nacionales e internacionales y brindando a jóvenes investigadores la oportunidad de desarrollar carreras internacionales.";
    subtitle2 = "Innovaciones y Colaboraciones";
    paragraph7 =
      "El proyecto Probral (DAAD/CAPES, 2023–2026) nos ha permitido desarrollar el subcorpus IMV, que contiene aproximadamente 20 horas de grabaciones en vídeo de interacciones en inglés como lengua franca (ILF). Este corpus incluye reuniones internacionales, clases en línea y encuentros privados, documentando una variedad de interacciones sociales. Esta colaboración involucra a investigadores de la UFMG, UFLA, la Universidad de Giessen y el IDS (Institut für Deutsche Sprache), con el objetivo de ampliar nuestras metodologías y ofrecer formación complementaria en herramientas de reconocimiento automático del habla (ASR). El proyecto Elaboración de una metodología para la transcripción y el análisis multimodal del habla-en-interacción mediada por vídeo (2024–2027) está financiado por el programa  FAPEMIG Universal.";
    subtitle3 = "Datos y Preservación";
    paragraph8 = 
     "Los datos utilizados en este proyecto, registrados bajo el CAAE: 55218521.1.1001.5149, constituyen un recurso en expansión desde 2010, documentando interacciones en diversos contextos interculturales. Esta plataforma está siendo desarrollada para preservar y poner a disposición estos datos, con el objetivo de crear un banco sólido que respalde análisis multimodales detallados.";
  }
  if (globalLanguage === "GE") {
    title1 = "Über Uns";
    paragraph1 =
      "Das Internationale Forschungszentrum Intercultural Communication in Multimodal Interactions (ICMI) ist ein interinstitutionelles und internationales Netzwerk von Forschenden, das darauf abzielt, interkulturelle Kommunikation in Interaktionen aus einer mikroanalytischen und multimodalen Perspektive zu analysieren.";
    paragraph2 =
      "Seit 2010 leistet unsere Arbeit Pionierarbeit bei der Untersuchung von gesprächsbezogenen, interaktionalen, translanguaging-, multimodalen und sprachlich-kognitiven Phänomenen und befasst sich mit der Komplexität interkultureller und translanguaging-Interaktionen in digitalen Umgebungen.";
    paragraph3 =
      "Derzeit widmen sich unsere Forschenden der Entwicklung innovativer Methoden zur Transkription und multimodalen Analyse von videobasierten Interaktionen in virtuellen Kontexten.";
    subtitle1 = "Ziele und Methodologie";
    paragraph4 =
      "Wir verfolgen das Ziel, empirische Analysen auf der Grundlage unseres Korpus durchzuführen und die Forschungsfelder der Multimodalen Gesprächsanalyse, Interaktionalen Linguistik, Gestenstudien, Interkulturellen Pragmatik sowie der Kognitiven und Kulturellen Linguistik miteinander zu verbinden. Konkret arbeiten wir an der Entwicklung einer Transkriptionsmethodologie, die Methoden aus den Gestenstudien, der Multimodalen Gesprächsanalyse und der Interaktionalen Linguistik integriert und prosodische, visuell-körperliche sowie verbale Ressourcen erfasst. Wir verwenden ein zweistufiges Transkriptionssystem: eine sequenzielle Transkription in EXMARaLDA mit GAT 2-Notation, gefolgt – in einigen Fällen – von einer detaillierten Gestenannotation mit der LASG-Methode.";
    paragraph5 =
      "Darüber hinaus erforschen wir die Integration von Systemen zur automatischen Spracherkennung (ASR) wie Atrain und Whisper in Zusammenarbeit mit dem Institut für Deutsche Sprache (Dr. Thomas Schmidt und Dr. Jan Gorisch). Auf diese Weise wollen wir die globale Kommunikation in virtuellen Umgebungen stärken, zur Internationalisierung brasilianischer Institutionen beitragen und Dialoge zwischen Wissenschaft, Wirtschaft und Politik fördern.";
    paragraph6 =
      "Unser Projekt zielt auch darauf ab, ein hochqualifiziertes akademisches Netzwerk aufzubauen, die Zusammenarbeit zwischen nationalen und internationalen Institutionen zu fördern und jungen Forschenden die Möglichkeit zu bieten, internationale Karrieren zu entwickeln.";
    subtitle2 = "Innovationen und Kooperationen";
    paragraph7 =
      "Das Probral-Projekt (DAAD/CAPES, 2023–2026) hat es uns ermöglicht, das IMV-Subkorpus zu entwickeln, das etwa 20 Stunden Videomaterial von Interaktionen auf Englisch als Lingua Franca (ELF) umfasst. Dieses Korpus beinhaltet internationale Meetings, Online-Unterricht und private Begegnungen und dokumentiert eine Vielzahl sozialer Interaktionen. An dieser Kooperation sind Forschende der UFMG, UFLA, der Universität Gießen und des IDS (Institut für Deutsche Sprache) beteiligt, mit dem Ziel, unsere Methodologien weiterzuentwickeln und zusätzliche Schulungen in ASR-Tools anzubieten. Das Projekt Entwicklung einer Methodologie für die Transkription und multimodale Analyse von videobasierter Sprache-in-Interaktion (2024–2027) wird durch das FAPEMIG Universal programm gefördert.";
    subtitle3 = "Daten und Archivierung";
    paragraph8 = 
      "Die in diesem Projekt verwendeten Daten, registriert unter CAAE: 55218521.1.1001.5149, stellen seit 2010 eine wachsende Ressource dar, die Interaktionen in unterschiedlichen interkulturellen Kontexten dokumentiert. Diese Plattform wird entwickelt, um diese Daten zu bewahren und zugänglich zu machen, mit dem Ziel, eine robuste Datenbank aufzubauen, die detaillierte multimodale Analysen unterstützt.";
}

  return {
    title1,
    subtitle1,
    subtitle2,
    subtitle3,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    paragraph6,
    paragraph7,
    paragraph8,
  };
}
