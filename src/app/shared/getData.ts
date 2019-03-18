import { Letter } from "./models/letter.model";
import { Link } from "./models/link.model";
export default (): Array<Letter> => {
  const data: Array<Letter> = [
    {
      character: "l",
      color: "red",
      flag: "lesbian-flag.png",
      title: "lesbian",
      definitions: [
        {
          definition: "women who are primarily attracted romantically, erotically, and/or emotionally to other women.",
          grammarType: "noun & adj",
        },
      ],
      definitionSource: {
        text: "thesafezoneproject.com",
        url: "https://thesafezoneproject.com/",
      },
    },
    {
      character: "g",
      color: "orange",
      flag: "gay-flag.png",
      title: "gay",
      definitions: [
        {
          definition:
            "experiencing attraction solely (or primarily) to some members of the same gender. Can be used to refer to men who are attracted to other men and women who are attracted to women.",
          grammarType: "adj",
        },
        {
          definition:
            "an umbrella term used to refer to the queer community as a whole, or as an individual identity label for anyone who is not straight.",
          grammarType: "adj",
        },
      ],
      definitionSource: {
        text: "thesafezoneproject.com",
        url: "https://thesafezoneproject.com/",
      },
    },
    {
      character: "b",
      color: "yellow",
      flag: "bisexual-flag.png",
      title: "bisexual",
      definitions: [
        {
          definition: "a person who experiences attraction to some men and women.",
          grammarType: "noun & adj",
        },
        {
          definition:
            "a person who experiences attraction to some people of their gender and another gender. Bisexual attraction does not have to be equally split, or indicate a level of interest that is the same across the genders an individual may be attracted to.",
          grammarType: "adj",
        },
      ],
      definitionSource: {
        text: "thesafezoneproject.com",
        url: "https://thesafezoneproject.com/",
      },
    },
    {
      character: "t",
      color: "green",
      flag: "transgender-flag.png",
      title: "transgender",
      definitions: [
        {
          definition:
            "a gender description for someone who has transitioned (or is transitioning) from living as one gender to another.",
          grammarType: "adj",
        },
        {
          definition:
            "an umbrella term for anyone whose sex assigned at birth and gender identity do not correspond in the expected way (e.g., someone who was assigned male at birth, but does not identify as a man).",
          grammarType: "adj",
        },
      ],
      definitionSource: {
        text: "thesafezoneproject.com",
        url: "https://thesafezoneproject.com/",
      },
    },
    {
      character: "q",
      color: "blue",
      flag: "queer-flag.png",
      title: "queer",
      definitions: [
        {
          definition: "an umbrella term to describe individuals who don’t identify as straight and/or cisgender.",
          grammarType: "adj",
        },
        {
          definition:
            "a slur used to refer to someone who isn’t straight and/or cisgender. Due to its historical use as a derogatory term, and how it is still used as a slur many communities, it is not embraced or used by all LGBTQ people. The term “queer” can often be use interchangeably with LGBTQ (e.g., “queer people” instead of “LGBTQ people”).",
          grammarType: "noun",
        },
      ],
      definitionSource: {
        text: "thesafezoneproject.com",
        url: "https://thesafezoneproject.com/",
      },
    },
    {
      character: "+",
      color: "violet",
      flag: "g2-flag.png",
      title: "In progress",
      definitions: [],
      definitionSource: {
        text: "",
        url: "",
      },
    },
  ];

  return data;
};

/*
 lesbian – noun & adj. : women who are primarily attracted romantically, erotically, and/or emotionally to other women. (thesafezoneproject.com)
  gay – 1 adj. : experiencing attraction solely (or primarily) to some members of the same gender. Can be used to refer to men who are attracted to other men and women who are attracted to women. 2 adj. : an umbrella term used to refer to the queer community as a whole, or as an individual identity label for anyone who is not straight. (thesafezoneproject.com)
  bisexual – 1 noun & adj. : a person who experiences attraction to some men and women. 2 adj. : a person who experiences attraction to some people of their gender and another gender. Bisexual attraction does not have to be equally split, or indicate a level of interest that is the same across the genders an individual may be attracted to. (thesafezoneproject.com)
  transgender – 1 adj. : a gender description for someone who has transitioned (or is transitioning) from living as one gender to another. 2 adj. : an umbrella term for anyone whose sex assigned at birth and gender identity do not correspond in the expected way (e.g., someone who was assigned male at birth, but does not identify as a man). (thesafezoneproject.com)
  queer – 1 adj. : an umbrella term to describe individuals who don’t identify as straight and/or cisgender. 2 noun : a slur used to refer to someone who isn’t straight and/or cisgender. Due to its historical use as a derogatory term, and how it is still used as a slur many communities, it is not embraced or used by all LGBTQ people. The term “queer” can often be use interchangeably with LGBTQ (e.g., “queer people” instead of “LGBTQ people”). (thesafezoneproject.com)
  questioning – verb, adj. : an individual who or time when someone is unsure about or exploring their own sexual orientation or gender identity. (thesafezoneproject.com)
  intersex – adj. : term for a combination of chromosomes, gonads, hormones, internal sex organs, and genitals that differs from the two expected patterns of male or female. Formerly known as hermaphrodite (or hermaphroditic), but these terms are now outdated and derogatory. (thesafezoneproject.com) 
  pansexual – adj. : a person who experiences sexual, romantic, physical, and/or spiritual attraction for members of all gender identities/expressions. Often shortened to “pan.” (thesafezoneproject.com)
  Two Spirit is not a contemporary “new-age” movement. While the term Two Spirit was coined in 1990 In Winnipeg, Canada as a means of unifying various gender identities and expressions of Native American/First Nations/Indigenous individuals, the term is not a specific definition of gender, sexual orientation or other self-determining catch-all phrase, but rather an umbrella term. Two Spirit people have both a male and female spirit within them and are blessed by their Creator to see life through the eyes of both genders. The term does not diminish the tribal-specific names, roles and traditions nations have for their own Two Spirit people. Examples of such names are the winkte among the Lakota and the nadleeh among the Navajo people. These names and roles go back to a time before western religion. Two Spirit is not a “New Age” movement, but rather a reclamation of Two Spirit’s rightful place in Native culture. (“Decolonizing and Reclaiming the Traditional Role of Two- Spirited People” by Shayna Plaut & David Kirk, 2016)

  asexual – adj. : experiencing little or no sexual attraction to others and/or a lack of interest in sexual relationships/behavior.  Asexuality exists on a continuum from people who experience no sexual attraction or have any desire for sex, to those who experience low levels, or sexual attraction only under specific conditions. Many of these different places on the continuum have their own identity labels. Sometimes abbreviated to “ace.” (thesafezoneproject.com)

  genderqueer – 1 adj. : a gender identity label often used by people who do not identify with the binary of man/woman. 2 adj. : an umbrella term for many gender non-conforming or non-binary identities (e.g., agender, bigender, genderfluid). (thesafezoneproject.com)
 */
