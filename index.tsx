/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import definePlugin from "@utils/types";
import { FluxDispatcher as Flux, Forms } from "@webpack/common";

import { options, settings } from "./components/settings";



export default definePlugin({
    name: "MessageNitroBadge",
    description: "Enables the Social Proofing Message Nitro Badge experiment",
    authors: [
        { name: "krystalskullofficial", id: 929208515883569182n }
    ],
    settings,
    dependencies: ["Experiments"],

    settingsAboutComponent: () => <>
        <Forms.FormText className="vc-plugin-messageNitroBadge-notice">
            Only shows Nitro Badge in servers <br />
            Doesnt show Nitro Badge for other people - ONLY YOURSELF
        </Forms.FormText>
    </>,

    start: () => Flux.dispatch({ ...options, experimentBucket: Number(settings.store.experimentTreatment) }),
    stop: () => Flux.dispatch({ ...options, experimentBucket: null }),
});
