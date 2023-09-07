import orderByProps from '../orderByProps';

describe('orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  it('should return an array of properties sorted by sortType', () => {
    const sortType = ['name', 'level'];
    const result = orderByProps(obj, sortType);

    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  it('should handle an empty sortType array', () => {
    const sortType = [];
    const result = orderByProps(obj, sortType);

    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });

  it('should handle a sortType array with missing properties', () => {
    const sortType = ['health', 'missing', 'attack'];
    const result = orderByProps(obj, sortType);

    expect(result).toEqual([
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' },
    ]);
  });
});
