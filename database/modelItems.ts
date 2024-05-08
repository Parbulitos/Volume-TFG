import { ModelItems, Models, PrismaClient } from '@prisma/client';
import { getPrismaInstance } from '@/database/prismaClient';

const prisma = getPrismaInstance();
export const addModelItem = async (model: ModelItems) => {
    return prisma.modelItems.create({
        data: model,
    });
};

export const addMultipleModelItems = async (models: ModelItems[]) => {
    return prisma.modelItems.createMany({
        data: models,
    });
};