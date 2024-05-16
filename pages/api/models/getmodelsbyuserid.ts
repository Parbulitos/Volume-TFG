import type { NextApiRequest, NextApiResponse } from 'next';
import { ModelItems } from '@prisma/client';
import { addModelItem, addMultipleModelItems } from '@/database/modelItems';
import { getCatalogModels, getModelsByUserId } from '@/database/models';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'GET') {
            const userId = req.query.userid as string;
            const models = await getModelsByUserId(userId);
            res.status(200).json({
                models: models,
            });
        }
    } catch (e: any) {
        console.error('An error has occurred. No models were found ', e);
        //Eliminar archivo del bucket para integridad de datos
        res.status(500).json({
            message: 'Error: ' + e.message,
        });
    }
}
