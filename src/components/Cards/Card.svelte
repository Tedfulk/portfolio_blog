<script lang="ts">
    import Card, { Content, PrimaryAction, Media, MediaContent } from '@smui/card';
    export let githubUrl: string ;
    export let image: string 
    
    function navigateToGithub() {
        window.open(githubUrl, '_blank');
    }
</script>

<div class="card-display">
    <div class="card-container" style="height: 10rem; width: 30rem">
        <Card style="margin: 2rem">
            <PrimaryAction on:click={navigateToGithub}>
                <Media aspectRatio="square" style="background-image: url({image});" class="card-media-square">
                </Media>
            </PrimaryAction>
        </Card>
    </div>
</div>

<style>
    :global(.card-media-square) {
        background-size: cover;
        background-position: center;
    }
</style>
