/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import definePlugin from "@utils/types";
import { FluxDispatcher as Flux, Forms } from "@webpack/common";

const options = {
    type: "EXPERIMENT_OVERRIDE_BUCKET" as const,
    experimentId: "2023-10_social_proofing_message_nitro_badge",
};

export default definePlugin({
    name: "MessageNitroBadge",
    description: "Enables the Social Proofing Message Nitro Badge experiment",
    authors: [
        { name: "krystalskullofficial", id: 929208515883569182n }
    ],
    dependencies: ["Experiments"],

    settingsAboutComponent: () => <>
        <Forms.FormText className="vc-plugin-messageNitroBadge-notice">
            Only shows Nitro Badge in servers. <br /> Doesnt show other badge for other people only yourself.
        </Forms.FormText>
    </>,

    start: () => Flux.dispatch({ ...options, experimentBucket: 1 }),
    stop: () => Flux.dispatch({ ...options, experimentBucket: null }),
});
