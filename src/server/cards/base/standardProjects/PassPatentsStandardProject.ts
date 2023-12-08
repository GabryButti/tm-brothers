import {IPlayer} from '../../../IPlayer';
import {CardName} from '../../../../common/cards/CardName';
import {CardRenderer} from '../../render/CardRenderer';
import {StandardProjectCard} from '../../StandardProjectCard';
import {SelectCard} from '../../../inputs/SelectCard';
import {IProjectCard} from '../../IProjectCard';
import {multiplier} from '../../Options';
import {OrOptions} from '../../../inputs/OrOptions';
import {keep} from '../../../deferredActions/ChooseCards';

export class PassPatentsStandardProject extends StandardProjectCard {
  constructor() {
    super({
      name: CardName.PASS_PATENTS_STANDARD_PROJECT,
      cost: 0,
      metadata: {
        cardNumber: 'SP10',
        renderData: CardRenderer.builder((b) =>
          b.standardProject('Pass cards to another player paying 1M€ for each card.', (eb) => {
            eb.text('X').cards(1).startAction.megacredits(0, {multiplier});
          }),
        ),
      },
    });
  }

  public override canAct(player: IPlayer): boolean {
    return player.cardsInHand.length > 0;
  }

  actionEssence(): void {
    // no-op
  }

  public override action(player: IPlayer){
    let count = 0;
    const availablePlayerTargets = player.game.getPlayers().filter((p) => p.id !== player.id);
    const availableActions = new OrOptions();
    availableActions.title = 'Passa progetti'
    availablePlayerTargets.forEach((target) => {
      const Title = 'Passa progetti a ' + target.name + ' pagando 1M€ per carta.'
    availableActions.options.push(new SelectCard(
      Title,
      'Pass',
      player.cardsInHand,
      {max: player.cardsInHand.length, played: false})
      .andThen((cards) => {
        player.megaCredits -= cards.length;
        cards.forEach((card) => {
          for (let i = 0; i < player.cardsInHand.length; i++) {
            if (player.cardsInHand[i].name === card.name) {
              player.cardsInHand.splice(i, 1);
              count++;
              break;
            }
          }
          player.game.projectDeck.discardPile.push(card);
        });
            const todraws: Array<IProjectCard> = [];
            for (let i=0; i<count; i++){
              const todraw = target.game.projectDeck.discardPile.pop();
              if(todraw == undefined) break
              todraws.push(todraw)
            }
            keep(target, todraws,[])
          this.projectPlayed(player);
          player.game.log('${0} passed ${1} patents to ' + target.name, (b) => b.player(player).number(cards.length));
          return undefined;
      }
    ));
    });
    return availableActions;
  }
}
