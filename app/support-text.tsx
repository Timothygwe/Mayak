export function spaceSupport(text: string) {
  return text.split(/(поддерж[а-яё]*)/giu).map((part, index) => {
    if (!/^поддерж/iu.test(part)) return part;

    return (
      <span className="supportWord" key={`${part}-${index}`}>
        {part.slice(0, 2)}<span className="doubleDGap">{part.slice(2, 3)}</span>{part.slice(3)}
      </span>
    );
  });
}
