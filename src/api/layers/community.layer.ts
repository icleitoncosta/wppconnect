/*
 * This file is part of WPPConnect.
 *
 * WPPConnect is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * WPPConnect is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with WPPConnect.  If not, see <https://www.gnu.org/licenses/>.
 */

import { Page } from 'playwright';
import { CreateConfig } from '../../config/create-config';
import { evaluateAndReturn } from '../helpers';
import { ControlsLayer } from './controls.layer';

export class CommunityLayer extends ControlsLayer {
  constructor(public page: Page, session?: string, options?: CreateConfig) {
    super(page, session, options);
  }

  /**
   * Create a community and add subgroups
   * @category Community
   * @param subGroupsIds sub groupds id
   */
  public async createCommunity(
    name: string,
    description: string,
    subGroupsIds: string | string[]
  ) {
    return evaluateAndReturn(
      this.page,
      (name, description, subGroupsIds) =>
        WPP.community.create(name, description, subGroupsIds),
      { name, description, subGroupsIds }
    );
  }

  /**
   * Disable a community
   * @category Community
   * @param communityId 00000@g.us
   */
  public async disableCommunity(communityId: string) {
    return evaluateAndReturn(
      this.page,
      (communityId) => WPP.community.deactivate(communityId),
      { communityId }
    );
  }

  /**
   * Add groups to community
   * @category Community
   * @param communityId 00000@g.us
   */
  public async addCommunityGroups(
    communityId: string,
    subgroupsIds: string | string[]
  ) {
    return evaluateAndReturn(
      this.page,
      (communityId, subgroupsIds) =>
        WPP.community.addSubgroups(communityId, subgroupsIds),
      { communityId, subgroupsIds }
    );
  }

  /**
   * Remove groups of a community
   * @category Community
   * @param communityId 00000@g.us
   */
  public async removeCommunityGroups(
    communityId: string,
    subgroupsIds: string | string[]
  ) {
    return evaluateAndReturn(
      this.page,
      (communityId, subgroupsIds) =>
        WPP.community.removeSubgroups(communityId, subgroupsIds),
      { communityId, subgroupsIds }
    );
  }

  /**
   * Demote participant of a community
   * @category Community
   * @param communityId 00000@g.us
   * @param participantsIds number@c.us
   */
  public async demoteCommunityParticipants(
    communityId: string,
    participantsIds: string | string[]
  ) {
    return evaluateAndReturn(
      this.page,
      (communityId, participantsIds) =>
        WPP.community.demoteParticipants(communityId, participantsIds),
      { communityId, participantsIds }
    );
  }

  /**
   * Demote participant of a community
   * @category Community
   * @param communityId 00000@g.us
   * @param participantsIds number@c.us
   */
  public async promoteCommunityParticipants(
    communityId: string,
    participantsIds: string | string[]
  ) {
    return evaluateAndReturn(
      this.page,
      (communityId, participantsIds) =>
        WPP.community.promoteParticipants(communityId, participantsIds),
      { communityId, participantsIds }
    );
  }

  /**
   * Retrieves a Community participants
   * @category Community
   * @param communityId 00000@g.us
   */
  public async getCommunityParticipants(communityId: string) {
    return evaluateAndReturn(
      this.page,
      (communityId) => WPP.community.getParticipants(communityId),
      { communityId }
    );
  }
}
