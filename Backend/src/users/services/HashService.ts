import bcrypt from 'bcrypt';

export class HashService {

  public static hash = (value: string): string => {

    const hash = bcrypt.hashSync(value, 8);

    return hash;
  }

  public static compare = (value: string, hash: string): boolean => {

    const result = bcrypt.compareSync(value, hash);

    return result;
  }
}
