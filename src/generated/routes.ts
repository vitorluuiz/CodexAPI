/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { LobbyController } from './../controllers/lobbyController';
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
        app.post('/api/lobba/create',
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
        app.get('/api/lobba',
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
        app.get('/api/lobba/:code',
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
        app.post('/api/lobba/:code/join',
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
        app.post('/api/lobba/:code/leave',
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
        app.delete('/api/lobba/:code',
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

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
