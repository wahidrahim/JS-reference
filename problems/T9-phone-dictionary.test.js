import T9Dictionary from './T9-phone-dictionary';

describe('T9 Phone Dictionary', () => {
  test('find method', () => {
    const dictionary = new T9Dictionary();

    dictionary.insert('wahid');
    dictionary.insert('uita');
    dictionary.insert('tita');
    expect(dictionary.find(92443)).toEqual(['wahid']);
    expect(dictionary.find(8482)).toEqual(['uita', 'tita']);
    expect(dictionary.find(-1)).toEqual([]);
  });

  test('findByPrefix method', () => {
    const dictionary = new T9Dictionary();

    dictionary.insert('wahid');
    dictionary.insert('watts');
    dictionary.insert('wattson');
    dictionary.insert('uita');
    dictionary.insert('tita');

    expect(dictionary.findByPrefix(92)).toEqual(['wahid', 'watts', 'wattson']);
    expect(dictionary.findByPrefix(-1)).toBe(null);
  });

  test('print method', () => {
    const dictionary = new T9Dictionary();

    dictionary.insert('wahid');
    dictionary.insert('watts');
    dictionary.insert('watson');
    dictionary.insert('uita');
    dictionary.insert('tita');

    expect(dictionary.print()).toEqual([
      'uita',
      'tita',
      'wahid',
      'watson',
      'watts',
    ]);
  });
});
