import CSCodeImg from './assets/icon_CS1.jpg';

export const PROMPT_GROUPS = [
  {
    image: null,
    title: 'Images',
    description:
      'Image on topic.',
  },
  {
    image: null,
    title: 'Poetry',
    description:
      'It returns a piece of text.',
  },
  {
    image: CSCodeImg,
    title: 'C# code',
    description:
      'It is executable and copy paste ready.',
  },
  {
    image: null,
    title: 'XAML code',
    description:
      'It helps to manage UI components.',
  },
];

export const EXAMPLES = {
  Images: {
    title: 'Images',
    description:
      'LLM can perform images from literal description.',
    code: `
      Generate an icon in color for web site which represent "C# code" category in the list. Make two symbols "C#" highly visible together in the same order.`,
  },
  Poetry: {
    title: 'Poetry',
    description:
      'Poetry example',
    code: `
      In shadows deep, where silent whispers flow,
      A world unfolds that only dreamers know.
      With stardust trails and skies that softly gleam,
      We drift away, adrift within a dream.`,
  },
  'C# code': {
    title: 'C# code',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
      private void OpenGiftLoyalty(object sender, RoutedEventArgs e)
      {
        GiftLoyaltyWindow giftLoyalty = new GiftLoyaltyWindow();
        giftLoyalty.Show();
        this.Close();
      }`,
  },
  'XAML code': {
    title: 'XAML code',
    description:
      'XAML code',
    code: `
      <Style x:Key="GroupButtonStyle" TargetType="Button">
          <Setter Property="FontSize" Value="40"/>
          <Setter Property="Height" Value="80"/>
      </Style>
      `,
  },
};