export interface IUserDTO {
    id: number;
    name: string;
    email: string;
  }
  
  /**
   * @swagger
   * components:
   *   schemas:
   *     UserDTO:
   *       type: object
   *       required:
   *         - id
   *         - name
   *         - email
   *       properties:
   *         id:
   *           type: integer
   *           description: The auto-generated id of the user
   *         name:
   *           type: string
   *           description: The name of the user
   *         email:
   *           type: string
   *           description: The email of the user
   */
  export class UserDTO implements IUserDTO {
    constructor(public id: number, public name: string, public email: string) {}
  }
  