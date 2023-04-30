export interface IWord {
  words: string[];
  answer: string;
  uri: string;
}

export const wordList: IWord[] = [
  {
    words: ['a', 'b', 'g', 't', 'e', 'f', 'l', 'g', 'i'],
    answer: 'eat',
    uri: 'https://media.istockphoto.com/id/458047741/photo/biting-an-apple.jpg?b=1&s=170667a&w=0&k=20&c=PYRSfJmj40Al01m-INgp4FrCjIRHu8NNErPzMdZghrg=',
  },
  {
    words: ['c', 'e', 'm', 'e', 's', 'n', 'k', 'l', 'u', 'r', 'z', 'y', 'a'],
    answer: 'race',
    uri: 'https://cdn.pixabay.com/photo/2014/10/22/17/25/woman-498257__340.jpg',
  },
];
