import { UnauthorizedException } from "@nestjs/common";

export const authcontext = ({ req }) => {
    if(req.headers?.authorization) {
        return { 
            user: { 
                id: '1234124' 
            }
        };
    }
    throw new UnauthorizedException();
}