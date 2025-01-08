import type { Config } from '@netlify/functions';

// Stop TypeScript from complaining about the environment variable
declare var process: {
    env: {
        NETLIFY_REBUILD_HOOK: string;
    };
};

// Function to trigger the build
const rebuildSite = async (triggerTitle: string) => {
    const url = new URL(process.env.NETLIFY_REBUILD_HOOK);
    url.searchParams.append('trigger_title', triggerTitle);

    return await fetch(url.toString(), {
        method: 'POST',
    });
};

// Scheduled function logic
export default async () => {
    console.log("Triggering scheduled site rebuild...");
    await rebuildSite('Scheduled rebuild (four times a daily)');
};

// Schedule: Runs 4 times a day at 6 AM, 12 PM, 2 PM, and 10 PM
export const config: Config = {
    schedule: '0 6,12,14,22 * * *', // Cron syntax for specific times
};
