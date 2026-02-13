/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LobbyController } from './../controllers/lobbyController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ChallengeController } from './../controllers/challengeController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "LobbyResponse": {
        "dataType": "refObject",
        "properties": {
            "_id": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "code": {"dataType":"string","required":true},
            "players": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "maxPlayers": {"dataType":"double","required":true},
            "isActive": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "updatedAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateLobbyRequest": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "maxPlayers": {"dataType":"double"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "JoinLobbyRequest": {
        "dataType": "refObject",
        "properties": {
            "playerName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LeaveLobbyRequest": {
        "dataType": "refObject",
        "properties": {
            "playerName": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SuccessMsg": {
        "dataType": "refObject",
        "properties": {
            "message": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ChallengeDifficulty": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["Muito fácil"]},{"dataType":"enum","enums":["Fácil"]},{"dataType":"enum","enums":["Médio"]},{"dataType":"enum","enums":["Avançado"]},{"dataType":"enum","enums":["Difícil"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TestCaseInput": {
        "dataType": "refObject",
        "properties": {
            "input": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"double"},{"dataType":"object"},{"dataType":"array","array":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"double"}]}}],"required":true},
            "expectedOutput": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"double"},{"dataType":"object"},{"dataType":"array","array":{"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"double"}]}}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ChallengeResponse": {
        "dataType": "refObject",
        "properties": {
            "_id": {"dataType":"string","required":true},
            "title": {"dataType":"string","required":true},
            "creator": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "difficulty": {"ref":"ChallengeDifficulty","required":true},
            "categories": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "description": {"dataType":"string","required":true},
            "testCases": {"dataType":"array","array":{"dataType":"refObject","ref":"TestCaseInput"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ErrorResponse": {
        "dataType": "refObject",
        "properties": {
            "error": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateChallengeRequest": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "creator": {"dataType":"string","required":true},
            "difficulty": {"ref":"ChallengeDifficulty","required":true},
            "categories": {"dataType":"array","array":{"dataType":"string"},"required":true},
            "description": {"dataType":"string","required":true},
            "testCases": {"dataType":"array","array":{"dataType":"refObject","ref":"TestCaseInput"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateChallengeRequest": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string"},
            "difficulty": {"ref":"ChallengeDifficulty"},
            "categories": {"dataType":"array","array":{"dataType":"string"}},
            "description": {"dataType":"string"},
            "testCases": {"dataType":"array","array":{"dataType":"refObject","ref":"TestCaseInput"}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsLobbyController_createLobby: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateLobbyRequest"},
        };
        app.post('/api/lobby/create',
            ...(fetchMiddlewares<RequestHandler>(LobbyController)),
            ...(fetchMiddlewares<RequestHandler>(LobbyController.prototype.createLobby)),

            async function LobbyController_createLobby(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLobbyController_createLobby, request, response });

                const controller = new LobbyController();

              await templateService.apiHandler({
                methodName: 'createLobby',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLobbyController_getAllLobbies: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/lobby',
            ...(fetchMiddlewares<RequestHandler>(LobbyController)),
            ...(fetchMiddlewares<RequestHandler>(LobbyController.prototype.getAllLobbies)),

            async function LobbyController_getAllLobbies(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLobbyController_getAllLobbies, request, response });

                const controller = new LobbyController();

              await templateService.apiHandler({
                methodName: 'getAllLobbies',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLobbyController_getLobbyByCode: Record<string, TsoaRoute.ParameterSchema> = {
                code: {"in":"path","name":"code","required":true,"dataType":"string"},
        };
        app.get('/api/lobby/:code',
            ...(fetchMiddlewares<RequestHandler>(LobbyController)),
            ...(fetchMiddlewares<RequestHandler>(LobbyController.prototype.getLobbyByCode)),

            async function LobbyController_getLobbyByCode(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLobbyController_getLobbyByCode, request, response });

                const controller = new LobbyController();

              await templateService.apiHandler({
                methodName: 'getLobbyByCode',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLobbyController_joinLobby: Record<string, TsoaRoute.ParameterSchema> = {
                code: {"in":"path","name":"code","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"JoinLobbyRequest"},
        };
        app.post('/api/lobby/:code/join',
            ...(fetchMiddlewares<RequestHandler>(LobbyController)),
            ...(fetchMiddlewares<RequestHandler>(LobbyController.prototype.joinLobby)),

            async function LobbyController_joinLobby(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLobbyController_joinLobby, request, response });

                const controller = new LobbyController();

              await templateService.apiHandler({
                methodName: 'joinLobby',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLobbyController_leaveLobby: Record<string, TsoaRoute.ParameterSchema> = {
                code: {"in":"path","name":"code","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"LeaveLobbyRequest"},
        };
        app.post('/api/lobby/:code/leave',
            ...(fetchMiddlewares<RequestHandler>(LobbyController)),
            ...(fetchMiddlewares<RequestHandler>(LobbyController.prototype.leaveLobby)),

            async function LobbyController_leaveLobby(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLobbyController_leaveLobby, request, response });

                const controller = new LobbyController();

              await templateService.apiHandler({
                methodName: 'leaveLobby',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsLobbyController_deleteLobby: Record<string, TsoaRoute.ParameterSchema> = {
                code: {"in":"path","name":"code","required":true,"dataType":"string"},
        };
        app.delete('/api/lobby/:code',
            ...(fetchMiddlewares<RequestHandler>(LobbyController)),
            ...(fetchMiddlewares<RequestHandler>(LobbyController.prototype.deleteLobby)),

            async function LobbyController_deleteLobby(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsLobbyController_deleteLobby, request, response });

                const controller = new LobbyController();

              await templateService.apiHandler({
                methodName: 'deleteLobby',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_createChallenge: Record<string, TsoaRoute.ParameterSchema> = {
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"CreateChallengeRequest"},
        };
        app.post('/api/challenges',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.createChallenge)),

            async function ChallengeController_createChallenge(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_createChallenge, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'createChallenge',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_getAllChallenges: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/challenges',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.getAllChallenges)),

            async function ChallengeController_getAllChallenges(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_getAllChallenges, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'getAllChallenges',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_getAvailableDifficulties: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/api/challenges/difficulties',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.getAvailableDifficulties)),

            async function ChallengeController_getAvailableDifficulties(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_getAvailableDifficulties, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'getAvailableDifficulties',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_getChallengeById: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.get('/api/challenges/:id',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.getChallengeById)),

            async function ChallengeController_getChallengeById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_getChallengeById, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'getChallengeById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_getChallengesByCreator: Record<string, TsoaRoute.ParameterSchema> = {
                creator: {"in":"path","name":"creator","required":true,"dataType":"string"},
        };
        app.get('/api/challenges/creator/:creator',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.getChallengesByCreator)),

            async function ChallengeController_getChallengesByCreator(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_getChallengesByCreator, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'getChallengesByCreator',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_getChallengesByDifficulty: Record<string, TsoaRoute.ParameterSchema> = {
                difficulty: {"in":"path","name":"difficulty","required":true,"dataType":"string"},
        };
        app.get('/api/challenges/difficulty/:difficulty',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.getChallengesByDifficulty)),

            async function ChallengeController_getChallengesByDifficulty(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_getChallengesByDifficulty, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'getChallengesByDifficulty',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_getChallengesByCategory: Record<string, TsoaRoute.ParameterSchema> = {
                category: {"in":"path","name":"category","required":true,"dataType":"string"},
        };
        app.get('/api/challenges/category/:category',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.getChallengesByCategory)),

            async function ChallengeController_getChallengesByCategory(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_getChallengesByCategory, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'getChallengesByCategory',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_updateChallenge: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
                requestBody: {"in":"body","name":"requestBody","required":true,"ref":"UpdateChallengeRequest"},
        };
        app.put('/api/challenges/:id',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.updateChallenge)),

            async function ChallengeController_updateChallenge(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_updateChallenge, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'updateChallenge',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsChallengeController_deleteChallenge: Record<string, TsoaRoute.ParameterSchema> = {
                id: {"in":"path","name":"id","required":true,"dataType":"string"},
        };
        app.delete('/api/challenges/:id',
            ...(fetchMiddlewares<RequestHandler>(ChallengeController)),
            ...(fetchMiddlewares<RequestHandler>(ChallengeController.prototype.deleteChallenge)),

            async function ChallengeController_deleteChallenge(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsChallengeController_deleteChallenge, request, response });

                const controller = new ChallengeController();

              await templateService.apiHandler({
                methodName: 'deleteChallenge',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
